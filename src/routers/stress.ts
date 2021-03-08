import express from 'express'

import { getStress, addStress, deleteStress } from '../controllers/stress'

const router = express.Router()

router.get('/', getStress)
router.post('/', addStress)
router.delete('/:id', deleteStress)

export default router