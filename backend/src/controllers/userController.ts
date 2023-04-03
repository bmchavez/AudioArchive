import { RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';

import UserModel from '../models/UserModel';

import { createUserParams } from '../interfaces/UserInterfaces';

/**
 * @description:  Create new user
 * @route:        POST /api/users
 * @access:       Public
 */
export const createUser: RequestHandler = asyncHandler(async (req, res) => {
  const { username, email, is_admin, hashed_password, salt }: createUserParams =
    req.body;
  const user = await UserModel.createUser({
    username,
    email,
    is_admin,
    hashed_password,
    salt,
  });

  // TODO: Input validation can be added here

  if (user) {
    res.status(201).json({ user, message: 'User created successfully' });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
});

/**
 * @description:  Get all users
 * @route:        GET /api/users
 * @access:       Public
 */
export const getUsers: RequestHandler = asyncHandler(async (req, res) => {
  const users = await UserModel.getUsers();

  if (users) {
    res.status(200).json({ users, message: 'Users retrieved successfully' });
  } else {
    res.status(404).json({ message: 'Users not found' });
  }
});

/**
 * @description:  Get user by id
 * @route:        GET /api/users/:id
 * @access:       Public
 */
export const getUserById: RequestHandler = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await UserModel.getUserById({ id });

  if (user) {
    res.status(200).json({ user, message: 'User retrieved successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
