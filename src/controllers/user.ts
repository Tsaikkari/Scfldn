// register user: credentials, update: all the rest info
import { Request, Response, NextFunction } from 'express'

import User from '../entities/User.postgres'
import Credential from '../entities/Credential.postgres'

import {
  InternalServerError,
  NotFoundError,
  BadRequestError,
} from '../helpers/apiError'
import { info } from 'winston'

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { info, credential } = req.body
    const exists = await Credential.findOne({
      where: { email: credential.email },
    })

    if (exists) {
      return next(
        new BadRequestError(`Email ${credential.email} already exists`)
      )
    }

    const newCredentials = Credential.create({ ...credential.password })
    const newUser = User.create({ 
        ...info, 
        credentials: newCredentials,
    })

    await User.save(newUser)
    res.status(201).json({ message: 'Registered successfully!' })
  } catch (error) {
    next(new InternalServerError(error.message))
  }
}
