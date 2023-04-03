import { RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';

import UserModel from '../models/UserModel';

import { CreateUpdateUserParams } from '../interfaces/UserInterfaces';

/** POST /api/users - Create new user (Public) */
export const createUser: RequestHandler = asyncHandler(async (req, res) => {
  const user = await UserModel.createUser(req.body as CreateUpdateUserParams);

  // TODO: Input validation can be added here

  if (user) {
    res.status(201).json({ user, message: 'User created successfully' });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
});

/** GET /api/users - Get all users (Public) */
export const getUsers: RequestHandler = asyncHandler(async (req, res) => {
  const users = await UserModel.getUsers();

  if (users) {
    res.status(200).json({ users, message: 'Users retrieved successfully' });
  } else {
    res.status(404).json({ message: 'Users not found' });
  }
});

/** GET User by ID (Public) */
export const getUserById: RequestHandler = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await UserModel.getUserById({ id });

  if (user) {
    res.status(200).json({ user, message: 'User retrieved successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

/** PUT /api/users/:id - Get User by ID & Update (Public) */
export const updateUser: RequestHandler = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const existingUser = await UserModel.getUserById({ id });

  if (!existingUser) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  const updatedUser = await UserModel.updateUser(
    id,
    existingUser,
    req.body as Partial<CreateUpdateUserParams>
  );

  if (updatedUser) {
    res
      .status(200)
      .json({ user: updatedUser, message: 'User updated successfully' });
  } else {
    res.status(500).json({ message: 'Failed to update user' });
  }
});

/** DELETE /api/users/:id - Get User by ID & Delete (Public) */
export const deleteUser: RequestHandler = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const existingUser = await UserModel.getUserById({ id });

  if (!existingUser) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  const deletedUser = await UserModel.deleteUser(id);

  if (deletedUser) {
    res.status(200).json({ message: 'User deleted successfully' });
  } else {
    res.status(500).json({ message: 'Failed to delete user' });
  }
});
