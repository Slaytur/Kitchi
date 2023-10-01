/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../../../.config/config';

import { type Request, Router } from 'express';

import passport from '../../modules/passport';

import type { UserDoc } from '../../models/user.model';

import log from '../../utils/log';

const router = Router();

router.post(`/`, (req: Request<Record<string, never>, { success?: string, errors?: Error | string }, Record<string, never>, { username?: string, password?: string, hCaptcha?: string }>, res, next) => {
    const username = req.query.username;
    const password = req.query.password;
    const hCaptcha = req.query.hCaptcha;

    // If the user is already logged in, then redirect them to the dashboard.
    if (req.isAuthenticated()) return res.redirect(`/dashboard`);

    // If not all fields are filled out, somebody tampered with the form. Directly reject the request.
    if (typeof username !== `string` || typeof password !== `string`) return res.status(400);

    // Make sure the captcha was solved.
    if (config.mode === `prod` && typeof hCaptcha !== `string`) return res.json({ errors: `Please solve the captcha.` });

    passport.authenticate(`login`, (err: Error, user: UserDoc, info: unknown) => {
        if (err !== undefined) {
            log(`red`, String(err));
            return res.json({ errors: err });
        }

        if (user == null) return res.json({ errors: `User does not exist.` });

        req.logIn(user, err => {
            if (err !== undefined) {
                log(`red`, err);
                return res.json({ errors: `There was an error processing your request.` });
            }

            log(`yellow`, `User "${user.username}" succesfully logged in.`);
            return res.json({ success: `You have logged in!` });
        });
    })(req, res, next);
});

export default router;
