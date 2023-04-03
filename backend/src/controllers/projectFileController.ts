import { RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';
import { CreateProjectFileParams } from '../interfaces/ProjectFileInterfaces';
import ProjectFileModel from '../models/projectFileModel';

/* POST /api/project_files - Create new Project File (Public) */
export const createProjectFile: RequestHandler = asyncHandler(
  async (req, res): Promise<void> => {
    const projectFile = await ProjectFileModel.createProjectFile(
      req.body as CreateProjectFileParams
    );

    // TODO: Input validation can be added here

    if (projectFile) {
      res
        .status(201)
        .json({ projectFile, message: 'Project file created successfully' });
    } else {
      res.status(400).json({ message: 'Invalid project file data' });
    }
  }
);

/* GET /api/project_files - Get all Project Files (Public) */
export const getProjectFiles: RequestHandler = asyncHandler(
  async (req, res) => {
    const projectFiles = await ProjectFileModel.getProjectFiles();

    // TODO: Input validation can be added here

    if (projectFiles) {
      res.status(200).json({
        projectFiles,
        message: 'Project files retrieved successfully',
      });
    } else {
      res.status(404).json({ message: 'Project files not found' });
    }
  }
);

/** GET /api/project_file/:id - Get Project File by ID (Public) */
export const getProjectFileById: RequestHandler = asyncHandler(
  async (req, res) => {
    const id = BigInt(req.params.id);
    const projectFile = await ProjectFileModel.getProjectFileById({ id });

    // TODO: Input validation can be added here ??

    if (projectFile) {
      res
        .status(200)
        .json({ projectFile, message: 'Project file retrieved successfully' });
    } else {
      res.status(404).json({ message: 'Project file not found' });
    }
  }
);

/** PUT /api/project_file/:id - Get Project File by ID & update (Public) */
export const updateProjectFile: RequestHandler = asyncHandler(
  async (req, res) => {
    const id = BigInt(req.params.id);
    const existingProjectFile = await ProjectFileModel.getProjectFileById({
      id,
    });

    if (!existingProjectFile) {
      res.status(404).json({ message: 'Project file not found' });
      return;
    }

    // TODO: Input validation can be added here

    const updatedProjectFile = await ProjectFileModel.updateProjectFile(
      id,
      existingProjectFile,
      req.body as Partial<CreateProjectFileParams>
    );

    if (updatedProjectFile) {
      res.status(200).json({
        updatedProjectFile,
        message: 'Project file updated successfully',
      });
    } else {
      res.status(400).json({ message: 'Invalid project file data' });
    }
  }
);

/** DELETE /api/project_file/:id - Get Project File by ID & delete (Public) */
export const deleteProjectFile: RequestHandler = asyncHandler(
  async (req, res) => {
    const id = BigInt(req.params.id);
    const projectFile = await ProjectFileModel.getProjectFileById({ id });

    if (projectFile) {
      await ProjectFileModel.deleteProjectFile({ id });
      res.status(200).json({ message: 'Project file deleted successfully' });
    } else {
      res.status(404).json({ message: 'Project file not found' });
      throw new Error('Project file not found');
    }
  }
);

// export const deleteProjectFile: RequestHandler = asyncHandler(
//   async (req, res) => {
//     const id = BigInt(req.params.id);
//     const projectFile = await ProjectFileModel.getProjectFileById({ id });

//     if (!projectFile) {
//       res.status(404).json({ message: 'Project file not found' });
//       return;
//     }

//     const deletedProjectFile = await ProjectFileModel.deleteProjectFile({ id });

//     if (deletedProjectFile) {
//       res.status(200).json({
//         deletedProjectFile,
//         message: 'Project file deleted successfully',
//       });
//     } else {
//       res.status(500).json({ message: 'Failed to delete project file' });
//     }
//   }
// );
