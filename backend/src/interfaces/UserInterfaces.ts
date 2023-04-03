// export default interface User {
//   id?: string;
//   username: string;
//   email: string;
//   is_admin: boolean | false;
//   hashed_password: Buffer;
//   salt: Buffer;
//   created_at?: string;
//   updated_at?: string;
// }

export default interface User {
  id: string;
  username: string;
  email: string;
  is_admin: boolean;
  hashed_password: Buffer;
  salt: Buffer;
  created_at: string;
  updated_at: string;
}

// export interface createUserParams {
//   username: string;
//   email: string;
//   is_admin: boolean | false;
//   hashed_password: Buffer;
//   salt: Buffer;
// }

export interface createUserParams {
  username: string;
  email: string;
  is_admin: boolean;
  hashed_password: Buffer;
  salt: Buffer;
}

export interface GetUserByIdParams {
  id: string;
}

export interface RawResult {
  rows: User[];
}
