// import express from 'express';
import 'dotenv/config';
import express from 'express';
import env from './util/validateEnv';
// import db from './config/db';
import projectFileRoutes from './routes/projectFileRoutes';
import morgan from 'morgan';
import { notFound } from './middleware/errorMiddleware';

// TODO: Import and use colors middleware
// TODO: Update validateEnv
// TODO: Abstract into app.ts file?
// TODO: Update PSQL version

const app = express();

// Calling middleware
app.use(morgan('dev')); // logging middleware

// So that express can receive json bodies
// app.use(express.json());

app.use('/api/project_files', projectFileRoutes);
// app.get('/api/project_files', (req, res) => {
//   db.raw('select * from project_files').then((project_files: any) => {
//     res.send(project_files);
//   });

//   // res.send('getProjectFiles');
// });

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.use(notFound); // 404 middleware
// app.use(errorHandler); //

const port = env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port! ${port}`);
});
