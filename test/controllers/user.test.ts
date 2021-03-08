import { Request, Response, NextFunction } from 'express'
import request from 'supertest'

import connection from '../db-helper'
import { createUser } from '../controller-helpers'

