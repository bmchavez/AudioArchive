import express from 'express';
// import * as projectFileController from '../controllers/projectFileController';
import {
  getProjectFiles,
  getProjectFileById,
  createProjectFile,
  updateProjectFile,
  deleteProjectFile,
} from '../controllers/projectFileController';

const router = express.Router();
// export const projectFilesRouter = Router();

// router.get('/', projectFileController.getProjectFiles);
router.get('/', getProjectFiles);
router.post('/', createProjectFile);

router.get('/:id', getProjectFileById);
router.put('/:id', updateProjectFile);
router.delete('/:id', deleteProjectFile);

export default router;
