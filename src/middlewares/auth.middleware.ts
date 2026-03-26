import {Request, Response, NextFunction} from 'express'

export const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if(!authHeader || !authHeader.startsWith('Bearer ')){
    res.status(401).json({
      error: 'Unauthorized',
      message: "Cabeçalho Authorization ausente ou mal formatado. Bearer <TOKEN>"
    })
    return;
  }

  const token = authHeader.split(' ')[1]
  const tokenValidator = process.env.TEST_BEARER_TOKEN

  if(token != tokenValidator){
    res.status(401).json({
      error: "Unauthorized",
      message: "Token inválido ou expirado!"
    })
    return;
  }

  const userRole = req.headers['user-role'];
  if(userRole == 'guest'){
    res.status(403).json({
      error: "Forbidden",
      message: "Você não tem permissão para acessar esse instrumento de autorrelato"
    })

    return;
  }

  next();
}