import { Request, Response, NextFunction } from 'express'
import { ZodObject, ZodError } from 'zod'


export const dataValidation = (schema: ZodObject<any, any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params
      });
      next()
    } catch (e) {
      if (e instanceof ZodError) {
        res.status(400).json({
          error: 'Dados de entrada invalidos!',
          details: e.issues.map((err) => ({
            campo: err.path.join("."),
            mensagem: err.message
          }))
        })
        return;
      };
      next(e);
    }
  }
}
