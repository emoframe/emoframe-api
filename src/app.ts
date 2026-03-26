import express from 'express';
import cors from 'cors'; // realização de requisições sem serem bloqueadas pelo navegador
import helmet from 'helmet'; // headers de segurança
import susRoutes from './routes/sus.routes'
import panasRoutes from './routes/panas.routes'
import leapRoutes from './routes/leap.routes'
import samRoutes from './routes/sam.routes'
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json())

app.get('/health', (req,res) => {
  res.status(200).json({status:'OK', service:'sus-micro'})
})

app.use('/api/sus', susRoutes);
app.use('/api/panas', panasRoutes)
app.use('/api/leap', leapRoutes)
app.use('/api/sam', samRoutes)



export default app