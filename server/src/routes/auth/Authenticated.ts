/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';

const router = Router();

router.get(`/`, (req, res) => {
    req.isAuthenticated()
        ? res.status(200).json({
            authenticated: true,
            username: (req.user as any).username
        })
        : res.status(200).json({ authenticated: false });
});

export default router;
