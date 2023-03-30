import knex from 'knex';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const knexConfig = require('../../knexfile');
// import knexConfig from '../database/knexfile';   TODO:Figure out why this didn't work for blog post

// Set up Knex with the appropriate configuration based on the current environment
const environment = process.env.NODE_ENV || 'development';
const db = knex(knexConfig[environment]);

// module.exports = db;
export default db;
