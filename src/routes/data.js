import { Router } from 'express';
import { getGridData, getImageData } from '../controllers/data.controller';
import asyncHelper from '../utils/asyncHelper';
import { verifyToken } from '../services/auth.services';

const router = Router();

router.post('/gridData', verifyToken, asyncHelper(getGridData));
router.post('/imageData', verifyToken, asyncHelper(getImageData));

export default router;