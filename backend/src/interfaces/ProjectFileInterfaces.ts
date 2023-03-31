export interface ProjectFile {
  id: bigint;
  name: string;
  program: string;
  genre: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateProjectFileParams {
  name: string;
  program: string;
  genre: string;
}

export interface RawResult {
  rows: ProjectFile[];
}
