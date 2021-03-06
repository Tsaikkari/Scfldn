import express, { Request, Response, NextFunction } from 'express'

import stressRouter from './routers/stress'

const app = express()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello world')
})

app.use('/stress', stressRouter)

export default app