import { Knex } from 'knex';
import db from '../config/db';

import User, {
  createUserParams,
  GetUserByIdParams,
  RawResult,
} from '../interfaces/UserInterfaces';

class UserModel {
  async createUser(params: createUserParams): Promise<User> {
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

    // RAW QUERY BUILDER
    const sq = `SELECT * FROM users WHERE id = ?;`;
    const bindings = [id];

    const user: Knex.Raw = await db.raw(sq, bindings);

    return (user as unknown as RawResult).rows[0];
  }
}
export default new UserModel();
