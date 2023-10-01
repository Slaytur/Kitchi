import { createID } from '@boatgame-io/id-utils';

import passport from 'passport';
import passportLocal from 'passport-local';

import bcrypt from 'bcrypt';
import crypto from 'crypto';

import { User } from '../models/user.model';

import log from '../utils/log';

passport.serializeUser((user, callback) => {
    callback(null, user);
});

passport.deserializeUser((id, callback) => {
    void User.findById(id).then(user => callback(null, user)).catch(err => callback(err, null));
});

// Strategy.
passport.use(`login`, new passportLocal.Strategy({
    usernameField: `username`,
    passwordField: `password`
}, (username, password, done) => {
    User.findOne({ username }).then(user => {
        if (user == null) return done(`Incorrect username or password`, false);

        // Login a user.
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err != null) return log(`red`, err?.stack ?? ``);
            else if (isMatch) return done(null, user);
            else return done(`Incorrect username / password`, false);
        });
    }).catch(err => done(err, false));
}));

// Registration.
passport.use(`signup`, new passportLocal.Strategy({
    usernameField: `username`,
    passwordField: `password`
}, (username, password, done) => {
    void User.findOne({ username }).then(user => {
        if (user != null) return done(`User already exists`, false);

        const signupUser = new User({
            created: new Date(),
            id: createID(),

            username: username.toLowerCase(),
            displayName: username,

            settings: {
                skillLevel: 0,
                interests: {
                    [`0`]: true,
                    [`1`]: true,
                    [`2`]: true,
                    [`3`]: true,
                    [`4`]: true,
                    [`5`]: true,
                    [`6`]: true
                },
                restrictions: {
                    [`0`]: true,
                    [`1`]: true,
                    [`2`]: true,
                    [`3`]: true,
                    [`4`]: true,
                    [`5`]: true,
                    [`6`]: true
                }
            },

            token: `n${crypto.randomBytes(32).toString(`hex`)}`
        });

        bcrypt.genSalt(10, (err, salt) => {
            if (err != null) return done(err);
            bcrypt.hash(password, salt, (err, hash) => {
                if (err !== undefined) return done(err);

                signupUser.password = hash;
                signupUser.save().then(() => done(null, signupUser)).catch(err => done(err));
            });
        });
    });
}));

export default passport;
