// Update with your config settings.

// const moment = require('moment'); // If you're using TypeScript, you may need to use 'import' instead of 'require'

// const customMigrationNameGenerator = () => {
//   const date = moment().format('YYYYMMDD');
//   const counter = ('0000' + (global.migrationCounter || 0)).slice(-4);
//   global.migrationCounter = (global.migrationCounter || 0) + 1;
//   return `${date}${counter}`;
// };

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'audio_archive_development',
      user: 'benchavez',
      password: 'postgres',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      // tableName: 'knex_migrations',
      directory: './src/database/migrations',
      // name: customMigrationNameGenerator,
      // tableName: 'knex_user_migrations',
    },
  },
  production: {
    // configure production database here
  },
};
