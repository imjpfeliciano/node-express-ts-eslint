import express from 'express';
import demoController from '../controllers';

const { Router } = express;
const { demo } = demoController;

const router = Router();

router.get('/', demo.hi);

export default router;
