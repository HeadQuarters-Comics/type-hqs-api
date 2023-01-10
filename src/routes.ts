import express from 'express';
import { getFiltered, getHQs, getPublishers, getReleases } from './controllers/hq-controlller';
const router = express.Router();

router.get('/', getHQs)
router.get('/releases', getReleases)
router.get('/publishers', getPublishers)
router.get('/:publisher', getFiltered)

export = router;