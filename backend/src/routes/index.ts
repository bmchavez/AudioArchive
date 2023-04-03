import { Router } from 'express';

import projectFileRoutes from './projectFileRoutes';
import googleAuthRoutes from './googleAuthRoutes';
import userRoutes from './userRoutes';

const routes = Router();

routes.use('/auth', googleAuthRoutes);
routes.use('/api/project_files', projectFileRoutes);
routes.use('/api/users', userRoutes);

export default routes;
