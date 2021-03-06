import { Request, Response, NextFunction } from 'express'

import Stress from '../entities/Stress.postgres'

export const getStress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        const stress = await Stress.find()
        res.status(200).json({ stress })
    } catch (error) {
        next()
    }
}

export const addStress = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    try {
        const stress = req.body
        const newStress = Stress.create({ ...stress })
        await Stress.save(newStress)

        res.status(201).json({ message: "Successfully created stress!"})
    } catch (error) {
        next()
    }
}