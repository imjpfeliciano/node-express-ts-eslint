import express from 'express';
// import middlewares from '../middlewares';
import demo from './demo';

const { Router } = express;
const api = Router();

// internal middleware
// router.use(middlewares());

// '/api/'
api.get('/', (req, res) => {
  res.json({ hi: 'there' });
});

// '/api/_health'
api.get('/_health', (req, res) => {
  res.sendStatus(200);
});

// set routes here
api.use('/demo', demo);

export default api;
