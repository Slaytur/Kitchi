import config from '../../../.config/config';

import { Router } from 'express';

import * as xssFilters from 'xss-filters';
import * as HCaptcha from 'hcaptcha';

import passport from '../../modules/passport';

import log from '../../utils/log';

import type { UserDoc } from '../../models/user.model';

const router = Router();

router.post(`/`, (req, res, next) => {
    // If on production, and Captcha is unsigned, reject.
    if (config.mode === `prod` && req.body[`h-captcha-response`] == null) return res.json({ errors: `Please solve the captcha.` });

    const username = (req.query.username as string);

    const email = (req.query.email as string);

    const password = (req.query.password as string);
    const confirmPassword = (req.query.confirmPassword as string);

    const hCaptchaKey = (req.query.hCaptcha as string);

    // If not all fields are filled out, somebody tampered with the form. Directly reject the request.
    if (username == null || email == null || password == null || confirmPassword == null || (config.mode === `prod` && hCaptchaKey == null)) return res.status(400);

    // Username must contain at least one alphabetical character.
    if (!/[a-zA-Z]/.test(username)) return res.json({ errors: `Your username must contain at least one letter.` });

    // Username must be between 3 and 20 characters.
    if (username.length < 3 || username.length > 20) return res.json({ errors: `Your username must be between 3 and 20 characters.` });

    // Username may not contain spaces.
    if (/[^\w\s]/.test(username) || username.split(` `).length > 1) return res.json({ errors: `Your username cannot contain spaces.` });

    // Email must be an actual email.
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) return res.json({ errors: `Invalid email.` });

    // Password must be parseable.
    if (password !== xssFilters.inHTMLData(password)) return res.json({ errors: `Invalid password.` });

    // Passwords must be the same.
    if (password !== confirmPassword) return res.json({ errors: `Passwords do not match.` });

    // Password must be between 8 and 64 characters.
    if (password.length < 8 || password.length > 64) return res.json({ errors: `Your password must be between 8 and 64 characters.` });

    // HCaptcha verification.
    config.mode === `prod` && process.env.HCAPTCHA_KEY != null && HCaptcha.verify(process.env.HCAPTCHA_KEY, hCaptchaKey)
        .then(data => data != null && res.json({ errors: `Invalid captcha.` }))
        .catch(() => res.status(500));

    passport.authenticate(`signup`, async (err: Error, user: UserDoc, info: unknown) => {
        if (err != null) throw err;

        user.email = email;

        const creationIP = req.header(`cf-conneting-ip`) ?? req.header(`x-forwarded-for`) ?? req.header(`x-real-ip`) ?? req.ip;

        user.creationIP = creationIP;
        user.lastIP = creationIP;

        await user.save();

        log(`yellow`, `Created account "${user.username}" with email "${user.email}".`);
        res.json({ success: `Your account has been registered.` });
    })(req, res, next);
});

export default router;
