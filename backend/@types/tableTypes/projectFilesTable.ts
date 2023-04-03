import { Knex } from 'knex';
import { ProjectFile } from '../../src/interfaces/ProjectFileInterfaces';

declare module 'knex/types/tables' {
  interface Tables {
    project_files: ProjectFile;
    project_files_composite: Knex.CompositeTableType<
      ProjectFile,
      Pick<ProjectFile, 'name' | 'program' | 'genre'> &
        Partial<Pick<ProjectFile, 'created_at' | 'updated_at'>>,
      Partial<Omit<ProjectFile, 'id'>>
    >;
  }
}
