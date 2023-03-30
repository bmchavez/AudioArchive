import { RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';
import { CreateProjectFileParams } from '../interfaces/ProjectFileInterfaces';
import ProjectFileModel from '../models/projectFileModel';

/**
 * @description:  Create new project file
 * @route:        POST /api/project_files
 * @access:       TODO: Private
 */
export const createProjectFile: RequestHandler = asyncHandler(
  async (req, res): Promise<void> => {
    const { name, program, genre }: CreateProjectFileParams = req.body;

    // TODO: Input validation can be added here

    const projectFile = await ProjectFileModel.createProjectFile({
      name,
      program,
      genre,
    });

    res
      .status(201)
      .json({ projectFile, message: 'Project file created successfully' });
    // } catch (error) {res.status(500).json({ error: 'An error occurred while creating the project file' });}
  }
);

/**
 * @description:  Get all project files
 * @route:        GET /api/project_files
 * @access:       Public
 */
export const getProjectFiles: RequestHandler = asyncHandler(
  async (req, res) => {
    const projectFiles = await ProjectFileModel.getProjectFiles();

    // TODO: Input validation can be added here

    res.status(200).json(projectFiles);

    // res.status(500).json({ error: 'An error occurred while fetching the project files' });
  }
);

/**
 * @description:  Get project file by id
 * @route:        GET /api/project_files/:id
 * @access:       Public
 */
export const getProjectFileById: RequestHandler = asyncHandler(
  async (req, res) => {
    const id = BigInt(req.params.id);
    const projectFile = await ProjectFileModel.getProjectFileById({ id });

    // TODO: Input validation can be added here ??

    res.status(200).json(projectFile);
  }
);
