import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('federated_credentials', (table) => {
    table.uuid('user_id').notNullable();
    table.string('provider').notNullable();
    table.string('subject').notNullable();
    table.primary(['provider', 'subject']);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
