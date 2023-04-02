import { Router } from 'express';
import passport from 'passport';
// import passport from '../middleware/passportMiddleware';

const router = Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// const clientUrl =
//   process.env.NODE_ENV === 'production'
//     ? process.env.CLIENT_URL_PROD
//     : process.env.CLIENT_URL_DEV;

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    // failureRedirect: '/login',
    session: false,
  }),
  (req, res) => {
    // const token = req.user.generateJWT();
    // res.cookie('x-auth-cookie', token);
    // res.redirect(clientUrl);
    res.redirect('/dashboard');
  }
);

export default router;
