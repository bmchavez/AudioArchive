// import mongoose from 'mongoose';

// declare module 'express-session' {
//   interface SessionData {
//     userId: mongoose.Types.ObjectId;
//   }
// }

// import { knex } from 'knex';

// import { User } from 'path/to/your/interfaces';

// declare module 'knex/types/tables' {
//   interface Tables {
//     project_files: ProjectFile;
//     project_files_composite: Knex.CompositeTableType<
//       User,
//       Pick<User, 'name'> & Partial<Pick<User, 'created_at' | 'updated_at'>>,
//       Partial<Omit<User, 'id'>>
//     >;
//   }
// }

import { Knex } from 'knex';
// import { knex } from 'knex';

// import { User } from 'path/to/your/interfaces';
// import { ProjectFileInterface as ProjectFile } from '../src/models/projectFileModel';
// import { Knex } from 'knex';
import ProjectFile from '../src/interfaces/ProjectFileInterfaces';

// TODO: import projectFile interface

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
