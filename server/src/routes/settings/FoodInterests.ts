import { Router } from 'express';
import { User } from '../../models/user.model';

const router = Router();

router.post(`/`, (req, res) => {
    if (!req.isAuthenticated()) return res.redirect(`/login`);

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    void User.findOne({ username: (req as any).user.username }).then(user => {
        if (user === null) return res.json({ errors: `Invalid account data` });

        user.settings.interests = {
            [`0`]: Boolean(req.body[`interest-american`]),
            [`1`]: Boolean(req.body[`interest-asian`]),
            [`2`]: Boolean(req.body[`interest-cajun`]),
            [`3`]: Boolean(req.body[`interest-canadian`]),
            [`4`]: Boolean(req.body[`interest-french`]),
            [`5`]: Boolean(req.body[`interest-italian`]),
            [`6`]: Boolean(req.body[`interest-spicy`])
        };

        void user.save()
            .then(() => res.redirect(req.headers.host !== undefined && req.headers.host?.includes(`localhost`) ? `http://localhost:3000/settings` : `/settings`))
            .catch(() => res.json({ errors: `Invalid account data` }));
    });
});

export default router;
