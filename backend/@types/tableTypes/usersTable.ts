import { Knex } from 'knex';
import User from '../../src/interfaces/UserInterfaces';

declare module 'knex/types/tables' {
  interface Tables {
    users: User;
    users_composite: Knex.CompositeTableType<
      User,
      Pick<
        User,
        'username' | 'email' | 'is_admin' | 'hashed_password' | 'salt'
      > &
        Partial<Pick<User, 'created_at' | 'updated_at'>>,
      Partial<Omit<User, 'id'>>
    >;
  }
}
