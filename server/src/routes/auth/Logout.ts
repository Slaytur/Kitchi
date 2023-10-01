/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../../../.config/config';

import { Router } from 'express';

import log from '../../utils/log';

const router = Router();

router.get(`/`, (req, res) => {
    if (req.headers.host === undefined) return;
    if (req.isAuthenticated()) {
        log(`magenta`, `[AUTH]: "${((req.user as any).username as string)}" logged out.`);

        req.logOut(err => {
            if (err !== undefined) throw err;
            res.redirect(typeof req.headers.host === `string` && req.headers.host.includes(`localhost`)
                ? `http://localhost:3000`
                : config.domain
            );
        });
    } else res.redirect(typeof req.headers.host === `string` && req.headers.host.includes(`localhost`) ? `http://localhost:3000` : config.domain);
});

export default router;
