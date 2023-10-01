/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import axios from 'axios';

import { User } from '../../models/user.model';

const router = Router();

const difficulties = [`easy`, `medium`, `hard`];
const restrictions = [
    `gluten-free`,
    `halal`,
    `kosher`,
    `lactose-intolerant`,
    `low-sodium`,
    `low-sugar`,
    `vegan`,
    `vegeterian`
];
const interests = [
    `american`,
    `asian`,
    `cajun`,
    `canadian`,
    `french`,
    `italian`,
    `spicy`
];

router.get(`/`, (req, res) => {
    if (!req.isAuthenticated()) return res.status(400);

    void User.findOne({ username: (req as any).user.username }).then(user => {
        if (user == null) return res.status(404);

        const prefs = [];

        for (const i in Object.values(user.settings.restrictions)) if (user.settings.restrictions[i]) prefs.push(restrictions[i]);
        for (const i in Object.values(user.settings.interests)) if (user.settings.interests[i]) prefs.push(interests[i]);

        const queryStr = [difficulties[user.settings.skillLevel]].concat(prefs, user.pantry).join(`;`);

        void axios.post(`http://localhost:9036?user=${user.id}&query=${queryStr}`).then(data => {
            console.log(data.data);
            res.status(200).json({
                recommendedCards: data.data,
                cookbook: user.cookbook,
                ingredients: user.pantry
            });
        });
    });

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
