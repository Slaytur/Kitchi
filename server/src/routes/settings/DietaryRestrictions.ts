import { Router } from 'express';
import { User } from '../../models/user.model';

const router = Router();

router.post(`/`, (req, res) => {
    if (!req.isAuthenticated()) return res.redirect(`/login`);

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    void User.findOne({ username: (req as any).user.username }).then(user => {
        if (user === null) return res.json({ errors: `Invalid account data` });

        user.settings.restrictions = {
            [`0`]: Boolean(req.body[`diet-glutenfree`]),
            [`1`]: Boolean(req.body[`diet-halal`]),
            [`2`]: Boolean(req.body[`diet-kosher`]),
            [`3`]: Boolean(req.body[`diet-lactoseintolerant`]),
            [`4`]: Boolean(req.body[`diet-lowsodium`]),
            [`5`]: Boolean(req.body[`diet-lowsugar`]),
            [`6`]: Boolean(req.body[`diet-vegan`]),
            [`7`]: Boolean(req.body[`diet-vegeterian`])
        };

        void user.save()
            .then(() => res.redirect(req.headers.host !== undefined && req.headers.host?.includes(`localhost`) ? `http://localhost:3000/settings` : `/settings`))
            .catch(() => res.json({ errors: `Invalid account data` }));
    });
});

export default router;
