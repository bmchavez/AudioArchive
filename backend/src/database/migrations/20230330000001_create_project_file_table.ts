import { Knex } from 'knex';

exports.up = async function (knex: Knex): Promise<void> {
  await knex.schema.createTable('project_files', (table) => {
    table.bigIncrements('id').primary();
    table.string('name').notNullable();
    table.string('program').notNullable();
    table.string('genre').notNullable();
    table.timestamps(true, true);

    // TODO: Also add who updated the record?
    // table
    //   .bigInteger('last_updated_by')
    //   .nullable()
    //   .references('id')
    //   .inTable('users')
    //   .onDelete('SET NULL');
  });
};

exports.down = function (knex: Knex): Promise<void> {
  return knex.schema.dropTable('project_files');
};



    // t.increments('id').primary().unsigned();
    // t.string('username').unique().index();
    // t.string('password');
    // t.string('email').unique().index();
    // t.timestamp('created_at').defaultTo(knex.fn.now());
    // t.timestamp('updated_at').defaultTo(knex.fn.now());
