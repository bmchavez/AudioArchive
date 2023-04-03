import { Knex } from 'knex';
import FederatedCredentials from '../../src/interfaces/federatedCredentialsInterfaces';

declare module 'knex/types/tables' {
  interface Tables {
    federated_credentials: FederatedCredentials;
    federated_credentials_composite: Knex.CompositeTableType<
      FederatedCredentials,
      Pick<FederatedCredentials, 'user_id' | 'provider' | 'subject'> &
        Partial<Pick<FederatedCredentials, 'created_at' | 'updated_at'>>,
      Partial<Omit<FederatedCredentials, 'id'>>
    >;
  }
}
