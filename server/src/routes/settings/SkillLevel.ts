import { Router } from 'express';
import { User } from '../../models/user.model';

const router = Router();

router.post(`/`, (req, res) => {
    if (!req.isAuthenticated()) return res.redirect(`/login`);

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    void User.findOne({ username: (req as any).user.username }).then(user => {
        if (user === null) return res.json({ errors: `Invalid account data` });

        if (typeof req.body[`skill-level`] !== `string`) return res.json({ errors: `Please fill out all fields` });
        if (Number(req.body[`skill-level`]) < 0 || Number(req.body[`skill-level`]) > 2) return res.json({ errors: `Your skill level must be a number betewen 0 and 2.` });

        user.settings.skillLevel = Number(req.body[`skill-level`]);

        void user.save()
            .then(() => res.redirect(req.headers.host !== undefined && req.headers.host?.includes(`localhost`) ? `http://localhost:3000/settings` : `/settings`))
            .catch(() => res.json({ errors: `Invalid account data` }));
    });
});

export default router;
