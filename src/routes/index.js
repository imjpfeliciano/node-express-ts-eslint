import express from 'express';
// import middlewares from '../middlewares';
import demo from './demo';

const { Router } = express;
const router = Router();

// internal middleware
// router.use(middlewares());

// '/api/'
router.get('/', (req, res) => {
  res.json({ hi: 'there' });
});

// '/api/_health'
router.get('/_health', (req, res) => {
  res.sendStatus(200);
});

// set routes here
router.use('/demo', demo);

export default router;
