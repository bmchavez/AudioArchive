import session from 'express-session';

const sessionMiddleware = session({
  secret: 'your-session-secret',
  resave: false,
  saveUninitialized: false,
});

export default sessionMiddleware;
