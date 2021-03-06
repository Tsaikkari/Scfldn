import express from 'express'

import { getStress, addStress } from '../controllers/stress'

const router = express.Router()

router.get('/', getStress)
router.post('/', addStress)

export default router