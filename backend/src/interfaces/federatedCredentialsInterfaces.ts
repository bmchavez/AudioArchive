// TODO: FIXME: unclear if you need another field for the composite primary key
export default interface FederatedCredentials {
  user_id: string;
  provider: string;
  subject: string;
  created_at: string;
  updated_at: string;
}
