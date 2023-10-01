/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../../../.config/config';

import { type Request, Router } from 'express';

import passport from '../../modules/passport';

import type { UserDoc } from '../../models/user.model';

import log from '../../utils/log';

const router = Router();

router.post(`/`, (req: Request<Record<string, never>, { success?: string, errors?: Error | string }, { username?: string, password?: string, [`h-captcha-response`]?: string }, Record<string, never>>, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const hCaptchaKey = req.body[`h-captcha-response`];

    // If on production, and Captcha is unsigned, reject.
    if (config.mode === `prod` && typeof hCaptchaKey !== `string`) return res.json({ errors: `Please solve the captcha.` });

    // If not all fields are filled out, somebody tampered with the form. Directly reject the request.
    if (typeof username !== `string` ||
        typeof password !== `string`
    ) return res.status(400);

    // Force username to be lowercase.
    req.body.username = req.body.username?.toLowerCase();

    // If the user is already logged in, then redirect them to the dashboard.
    if (req.isAuthenticated()) return res.redirect(`/dashboard`);

    passport.authenticate(`login`, (err: Error, user: UserDoc, info: unknown) => {
        if (err != null) {
            log(`red`, String(err));
            return res.json({ errors: err });
        }

        if (user == null) return res.json({ errors: `User does not exist.` });

        req.logIn(user, err => {
            if (err != null) {
                log(`red`, err);
                return res.json({ errors: `There was an error processing your request.` });
            }

            log(`yellow`, `User "${user.username}" succesfully logged in.`);
            return res.json({ success: `You have logged in!` });
        });
    })(req, res, next);
});

export default router;
