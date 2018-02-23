import express from 'express';
import demoController from '../controllers';

const { Router } = express;
const { demo } = demoController;

const api = Router();

/**
 * @swagger
 * /api/demo:
 *   get:
 *     tags: ["Demo"]
 *     description: Retrieves a JSON object with <b>hello world<b>
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/definitions/demo'
 */
api.get('/', demo.hi);

export default api;
