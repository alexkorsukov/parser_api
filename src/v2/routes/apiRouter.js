import express from 'express';
import { dataParser } from '../controllers/parserController';

const router = express.Router();

router.post('/parse', dataParser);
// other methods go here

export default router;
