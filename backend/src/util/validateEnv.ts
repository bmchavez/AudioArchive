import { cleanEnv, port, str } from 'envalid';

const env = cleanEnv(process.env, {
  PORT: port(),
  GOOGLE_CLIENT_ID: str(),
  GOOGLE_CLIENT_SECRET: str(),
});

export default env;
