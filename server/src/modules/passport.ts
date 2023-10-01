import passport from 'passport';
import passportLocal from 'passport-local';

import bcrypt from 'bcrypt';

import { User } from '../models/user.model';

import log from '../utils/log';
import { string } from '../utils/randomizer';

// Strategy.
passport.use(`login`, new passportLocal.Strategy({
    usernameField: `login-username`,
    passwordField: `login-password`
}, (username, password, done) => {
    User.findOne({
        username: username.toLowerCase()
    }).then(user => {
        if (user == null) return done(`Incorrect username or password`, false);

        // Login a user.
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err !== undefined) return log(`red`, err?.stack ?? ``);
            else if (isMatch) {
                user.token = string(64);
                void user.save();

                return done(null, user);
            } else return done(`Incorrect username / password`, false);
        });
    }).catch(err => done(err, false));
}));

// Registration.
passport.use(`signup`, new passportLocal.Strategy({
    usernameField: `signup-username`,
    passwordField: `signup-password`
}, (username, password, done) => {
    void User.findOne({
        username
    }).then(user => {
        if (user != null) return done(`User already exists`, false);

        const signupUser = new User({
            username: username.toLowerCase(),
            displayName: username,
            creationDate: new Date(),
            password
        });

        bcrypt.genSalt(10, (err, salt) => {
            if (err != null) return done(err);
            bcrypt.hash(signupUser.password, salt, (err, hash) => {
                if (err !== undefined) return done(err);

                signupUser.password = hash;
                signupUser.save().catch(err => done(err));
                done(null, signupUser);
            });
        });
    });
}));

passport.serializeUser((user, callback) => {
    callback(null, user);
});

passport.deserializeUser((id, callback) => {
    void User.findById(id, (err: unknown, user: typeof User) => {
        callback(err, user);
    });
});

export default passport;
