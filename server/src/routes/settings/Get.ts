/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';

const router = Router();

router.get(`/`, (req, res) => {
    req.isAuthenticated()
        ? res.status(200).json({
            authenticated: true,
            username: (req.user as any).username,
            displayName: (req.user as any).displayName,
            avatar: (req.user as any).avatar
        })
        : res.status(200).json({ authenticated: false });
});

export default router;
