import { Knex } from 'knex';

/**
 *
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
exports.up = async function (knex: Knex): Promise<void> {
  await knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "pgcrypto"')
    .createTable('example_table', (table) => {
      table
        .uuid('id', { primaryKey: true })
        .defaultTo(knex.raw('gen_random_uuid()'));
      table.string('name').notNullable();
      table.string('program').notNullable();
      table.string('genre').notNullable();
      table.timestamps(true, true);

      // table.timestamp('created_at').defaultTo(knex.fn.now());
      // table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

// USE IF PGCRYPTO ALREADY EXISTS:
exports.up = async function (knex: Knex): Promise<void> {
  await knex.schema.createTable('examples', (table) => {
    // table.increments('id').primary();
    // table.bigIncrements('id').primary();
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('name').notNullable();
    table.string('program').notNullable();
    table.string('genre').notNullable();
    table.timestamps(true, true);

    // TODO: Also add who updated the record?
  });
};

/**
 *
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
exports.down = function (knex: Knex): Promise<void> {
  return knex.schema.dropTable('examples');
};
