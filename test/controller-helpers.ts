import request from 'supertest'
import app from '../src/app'
import {
  userForm
} from './dto'

export const createUser = async () => {
  await request(app).post('/user').send(userForm)
}
