import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
} from '../controllers/userController';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);

router.get('/:id', getUserById);
// GET users
// GET users/:id
// POST user
// PUT user/:id
// DELETE user/:id

export default router;
