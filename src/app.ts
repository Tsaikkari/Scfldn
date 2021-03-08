import express, { Request, Response, NextFunction } from 'express'

import userRouter from './routers/user'
import stressRouter from './routers/stress'

const app = express()

app.use(express.json())

app.use('/user', userRouter)
app.use('/stress', stressRouter)

export default app