/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';

const router = Router();

router.get(`/`, (req, res) => {
    req.isAuthenticated()
        ? res.status(200).json({
            authenticated: true,
            username: (req.user as any).username,
            avatar: ((req.user as any).avatar as string | null) !== null
                ? `https://cdn.discordapp.com/avatars/${(req.user as any).discordID as string}/${((req.user as any).avatar as string | null) ?? ``}`
                : null
        })
        : res.status(200).json({ authenticated: false });
});

export default router;
