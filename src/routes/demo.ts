import express from 'express'
import demoController from '../controllers'

const { Router } = express
const { demo } = demoController

const api = Router()

api.get('/', (_, res) => {
  return res.status(200).json(demo.hi())
})

export default api
