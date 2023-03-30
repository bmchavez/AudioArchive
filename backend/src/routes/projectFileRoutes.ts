import express from 'express';
// import * as projectFileController from '../controllers/projectFileController';
import {
  getProjectFiles,
  getProjectFileById,
} from '../controllers/projectFileController';

const router = express.Router();

// router.get('/', projectFileController.getProjectFiles);
router.get('/', getProjectFiles);
router.get('/:id', getProjectFileById);

export default router;
