import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import 'dotenv/config';
import env from '../util/validateEnv';
// import verify from '../controllers/authController';

// Configure Google OAuth2 strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/api/auth/google/callback',
      // callbackURL: 'http://localhost:3000/auth/google/callback',
      // callbackURL: 'https://www.example.com/oauth2/redirect/google',  // OFFICIAL
      // scope: ['profile'], // OFFICIAL
      // state: true, // OFFICIAL
    },
    // verify
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Replace with your own user lookup or creation logic
        const existingUser = await findOrCreateUser(profile);
        return done(null, user);
      } catch (error) {
        return done(error as Error);
    //   }
    // }
  )
);

// Serialization and deserialization
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: any, done) => {
  try {
    // TODO: Replace findUserById with your own function for looking up users by their ID.
    const user = await findUserById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
