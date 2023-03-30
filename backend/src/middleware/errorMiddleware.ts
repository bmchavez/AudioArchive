import { RequestHandler } from 'express';

// TODO: UPDATE AND FINISH SETTING UP ERROR HANDLING MIDDLEWARE
const notFound: RequestHandler = (req, res, next) => {
  const error = new Error(`Not Found = ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// const errorHandler: RequestHandler = (err, req, res, next) => {
//   const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
//   res.status(statusCode);
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//   });
// };

// export { notFound, errorHandler };
export { notFound };
