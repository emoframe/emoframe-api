import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import susRoutes from './routes/sus.routes'
import panasRoutes from './routes/panas.routes'
import leapRoutes from './routes/leap.routes'
import samRoutes from './routes/sam.routes'
import eazRoutes from './routes/eaz.routes'
import gdsRoutes from './routes/gds.routes'
import brumsRoutes from './routes/brums.routes'
import gamexRoutes from './routes/gamex.routes'
import iuxrvRoutes from './routes/iuxrv.routes'
import pxRoutes from './routes/px.routes'

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json())

app.get('/health', (req,res) => {
  res.status(200).json({status:'OK', service:'api-micro'})
})

app.use('/api/sus', susRoutes)
app.use('/api/panas', panasRoutes)
app.use('/api/leap', leapRoutes)
app.use('/api/sam', samRoutes)
app.use('/api/eaz', eazRoutes)
app.use('/api/gds', gdsRoutes)
app.use('/api/brums', brumsRoutes)
app.use('/api/px', pxRoutes)
app.use('/api/gamex', gamexRoutes)
app.use('/api/iuxrv', iuxrvRoutes)




export default app