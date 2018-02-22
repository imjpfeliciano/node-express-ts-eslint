import express from 'express';
import demoController from '../controllers';

const { Router } = express;
const { demo } = demoController;

const api = Router();

api.get('/', demo.hi);

export default api;
