/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';

const router = Router();

router.get(`/`, (req, res) => {
    req.isAuthenticated()
        ? res.status(200).json({
            authenticated: true,
            settings: (req.user as any).settings
        })
        : res.status(200).json({ authenticated: false });
});

export default router;
