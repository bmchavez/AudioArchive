import db from '../config/db';
import { Knex } from 'knex';

import {
  CreateProjectFileParams,
  ProjectFile,
  RawResult,
} from '../interfaces/ProjectFileInterfaces';

interface GetProjectFileByIdParams {
  id: bigint;
}

interface UpdateProjectFileParams {
  id: bigint;
  name?: string;
  program?: string;
  genre?: string;
}

class projectFileModel {
  async createProjectFile(
    updateParams: CreateProjectFileParams
  ): Promise<ProjectFile> {
    const { name, program, genre } = updateParams;
    // KNEX QUERY BUILDER
    // const [projectFile] = await db<ProjectFile>('project_files')
    //   .insert({
    //     name: params.name,
    //     program: params.program,
    //     genre: params.genre,
    //   })
    //   .returning('*');

    // return projectFile;

    // RAW QUERY BUILDER
    const qs = `
      INSERT INTO project_files (name, program, genre)
      VALUES (?, ?, ?)
      RETURNING *;
    `;
    const bindings = [name, program, genre];
    const projectFiles: Knex.Raw = await db.raw(qs, bindings);
    const [projectFile] = (projectFiles as unknown as RawResult).rows;

    return projectFile;
  }

  async getProjectFiles(): Promise<ProjectFile[]> {
    // KNEX QUERY BUILDER
    // const projectFiles = await db('project_files').select('*');
    // return projectFiles;

    // RAW QUERY BUILDER
    const qs = `SELECT * FROM project_files;`;
    const projectFiles: Knex.Raw = await db.raw(qs);

    return (projectFiles as unknown as RawResult).rows;
  }

  async getProjectFileById(
    params: GetProjectFileByIdParams
  ): Promise<ProjectFile> {
    // RAW QUERY BUILDER
    const qs = `SELECT * FROM project_files WHERE id = ?;`;
    const bindings = [params.id];
    const projectFile: Knex.Raw = await db.raw(qs, bindings);

    return (projectFile as unknown as RawResult).rows[0];
  }

  async updateProjectFile(
    id: bigint,
    project_file: ProjectFile,
    updateParams: Partial<UpdateProjectFileParams>
  ): Promise<ProjectFile> {
    // const { name, program, genre } = updateParams;

    const updatedParams = {
      ...project_file,
      ...updateParams,
    };

    const qs = `
      UPDATE project_files
      SET name = ?, program = ?, genre = ?
      WHERE id = ?
      RETURNING *;
    `;

    const bindings = [
      updatedParams.name,
      updatedParams.program,
      updatedParams.genre,
      id,
    ];
    const projectFiles: Knex.Raw = await db.raw(qs, bindings);
    const [projectFile] = (projectFiles as unknown as RawResult).rows;

    return projectFile;
  }

  async deleteProjectFile(
    params: UpdateProjectFileParams
  ): Promise<ProjectFile[]> {
    const { id } = params;

    const query = `
      DELETE FROM project_files
      WHERE id = ?
      RETURNING *;
    `;

    const bindings = [id];
    const projectFiles: Knex.Raw = await db.raw(query, bindings);

    return (projectFiles as unknown as RawResult).rows;
  }
}

export default new projectFileModel();
