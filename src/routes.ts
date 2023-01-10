import express from 'express';
import { getHQs } from './controllers/hq-controlller';
const router = express.Router();

router.get('/', getHQs);

export = router;