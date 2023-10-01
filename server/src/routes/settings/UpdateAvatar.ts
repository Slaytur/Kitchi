import { Router } from 'express';
import { User } from '../../models/user.model';

const router = Router();

router.post(`/`, (req, res) => {
    if (!req.isAuthenticated()) return res.redirect(`/login`);
    if (typeof req.body[`display-avatar`] !== `string`) return res.json({ errors: `Please fill out all fields` });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    void User.findOne({ username: (req.user as any).user.username }).then(user => {
        if (user === null) return res.json({ errors: `Invalid account data` });
        user.avatar = req.body[`display-avatar`];

        void user.save()
            .then(() => res.redirect(`/settings`))
            .catch(() => res.json({ errors: `Invalid account data` }));
    });
});

export default router;
