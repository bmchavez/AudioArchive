// import express from 'express';
import 'dotenv/config';
import express from 'express';

import env from './util/validateEnv';
// import db from './config/db';
import projectFileRoutes from './routes/projectFileRoutes';
import googleAuthRoutes from './routes/googleAuthRoutes';
import morgan from 'morgan';
import { notFound } from './middleware/errorMiddleware';
import passport from './middleware/passportMiddleware';
import sessionMiddleware from './middleware/sessionMiddleware';

// TODO: Import and use colors middleware
// TODO: Update validateEnv
// TODO: Abstract into app.ts file?
// TODO: Update PSQL version

const app = express();

// Session middleware
app.use(sessionMiddleware);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Logging middleware
app.use(morgan('dev'));

// So that express can receive json bodies
app.use(express.json());

app.use('/api/project_files', projectFileRoutes);
app.use('/api/auth', googleAuthRoutes);

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.use(notFound); // 404 middleware
// app.use(errorHandler); //

const port = env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port! ${port}`);
});
