import { Knex } from 'knex';
import db from '../config/db';

import User, {
  CreateUpdateUserParams,
  GetUserByIdParams,
  RawResult,
} from '../interfaces/UserInterfaces';

class UserModel {
  async createUser(params: CreateUpdateUserParams): Promise<User> {
    const { username, email, is_admin, hashed_password, salt } = params;

    const query = `
      INSERT INTO users (username, email, is_admin, hashed_password, salt)
      VALUES (?, ?, ?, ?, ?)
      RETURNING *;
    `;

    const bindings = [username, email, is_admin, hashed_password, salt];
    const users: Knex.Raw = await db.raw(query, bindings);
    const [user] = (users as unknown as RawResult).rows;

    return user;
  }

  async getUsers(): Promise<User[]> {
    const query = `SELECT * FROM users;`;
    const users: Knex.Raw = await db.raw(query);

    return (users as unknown as RawResult).rows;
  }

  async getUserById(params: GetUserByIdParams): Promise<User> {
    const { id } = params;
    // KNEX QUERY BUILDER
    // const user: User | undefined = await db<User>('users')
    //   .select('*')
    //   .where(id)
    //   .first();

    // if (!user) {
    //   throw new Error('User not found');
    // }

    // return user;

    console.log(id);

    // RAW QUERY BUILDER
    const qs = `SELECT * FROM users WHERE id = ?;`;
    const bindings = [id];
    const user: Knex.Raw = await db.raw(qs, bindings);

    return (user as unknown as RawResult).rows[0];
  }

  async updateUser(
    id: string,
    user: User,
    updateParams: Partial<CreateUpdateUserParams>
  ): Promise<User | null> {
    // const { username, email, is_admin, hashed_password, salt } = updateParams;

    const updatedParams = {
      ...user,
      ...updateParams,
    };

    const qs = `
      UPDATE users
      SET username = ?, email = ?, is_admin = ?, hashed_password = ?, salt = ?
      WHERE id = ?
      RETURNING *;
    `;

    const bindings = [
      updatedParams.username,
      updatedParams.email,
      updatedParams.is_admin,
      updatedParams.hashed_password,
      updatedParams.salt,
      id,
    ];

    const users: Knex.Raw = await db.raw(qs, bindings);
    const [updatedUser] = (users as unknown as RawResult).rows;

    return updatedUser || null;
  }

  async deleteUser(id: string): Promise<User | null> {
    const qs = `
      DELETE FROM users
      WHERE id = ?
      RETURNING *;
    `;

    const bindings = [id];
    const users: Knex.Raw = await db.raw(qs, bindings);
    const [deletedUser] = (users as unknown as RawResult).rows;

    return deletedUser || null;
  }
}

export default new UserModel();
