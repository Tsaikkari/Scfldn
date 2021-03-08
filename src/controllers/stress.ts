import { Request, Response, NextFunction } from 'express'

import Stress from '../entities/Stress.postgres'
import { InternalServerError, NotFoundError } from '../helpers/apiError'

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
        console.log(stress)
        await Stress.save(newStress)

        res.status(201).json({ message: "Successfully created stress!" })
    } catch (error) {
        next()
    }
}

// TODO: Fix
export const deleteStress = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    try {
        const stressId = parseInt(req.params.id)
        console.log('stressId', stressId)
        const removeStress = Stress.findOne(stressId)
        //@ts-ignore
        await Stress.remove(removeStress)

        res.status(200).json({ message: "Successfully deleted stress!" })
    } catch (error) {
        next(new NotFoundError('Stress not found', error))
    }
}   