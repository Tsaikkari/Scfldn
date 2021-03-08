import express from 'express'
import { registerUser } from '../controllers/user'

const router = express.Router()

router.post('/', registerUser)

export default router