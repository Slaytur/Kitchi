/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import { User } from '../../models/user.model';

const router = Router();

router.post(`/`, (req, res) => {
    if (!req.isAuthenticated()) return res.redirect(`/login`);

    if (typeof req.body[`display-name`] !== `string`) return res.json({ errors: `Please fill out all fields` });
    if (req.body[`display-name`].length > 20) return res.json({ errors: `Your display cannot be over 20 characters` });
    if (req.body[`display-name`].toLowerCase() !== (req as any).user.username) return res.json({ errors: `Your display name must match your username, in spelling` });

    void User.findOne({ username: (req as any).user.username }).then(user => {
        if (user === null) return res.json({ errors: `Invalid account data` });
        user.displayName = req.body[`display-name`];

        void user.save()
            .then(() => res.redirect(`/settings`))
            .catch(() => res.json({ errors: `Invalid account data` }));
    });
});

export default router;
