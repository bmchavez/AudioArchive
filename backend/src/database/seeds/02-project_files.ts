import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('project_files').del();

  // Inserts seed entries
  await knex('project_files').insert([
    { name: 'song1', program: 'Ableton', genre: 'house' },
    { name: 'song2', program: 'FL Studio', genre: 'Trap' },
    { name: 'song3', program: 'Ableton', genre: 'Dubstep' },
    { name: 'song4', program: 'Ableton', genre: 'house' },
  ]);
}
