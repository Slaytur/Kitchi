import { Router } from 'express';
import { User } from '../../models/user.model';

const router = Router();

router.post(`/`, (req, res) => {
    if (!req.isAuthenticated()) return res.redirect(`/login`);
    if (!req.body[`display-avatar`] || typeof req.body[`display-avatar`] !== `string`) return res.json({ errors: `Please fill out all fields` });

    void User.findOne({ username: (<any>req).user.username }).then(user => {
        if (user === null) return res.json({ errors: `Invalid account data` });
        user.avatar = req.body[`display-avatar`];

        void user.save()
            .then(() => res.json({ success: `Succesfully updated account avatar.` }))
            .catch(() => res.json({ errors: `Invalid account data` }));
    });    
});

export default router;
