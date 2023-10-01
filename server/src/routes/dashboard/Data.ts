/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import axios from 'axios';

import { User } from '../../models/user.model';
import { Recipe } from '../../models/recipe.model';

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

        void axios.post(`http://localhost:9036`, {}, {
            headers: {
                userid: user.id,
                query: queryStr
            }
        }).then(async data => {
            const cardIDs = JSON.parse(JSON.stringify(data.data)).result.split(`,`);
            const cardDocs: Array<{ title: string, description: string, id: number }> = [];

            for (const id of cardIDs) {
                const recipe = await Recipe.findOne({ id });
                if (recipe === null) continue;

                cardDocs.push({
                    id,
                    title: recipe.name,
                    description: recipe.description
                });
            }

            res.status(200).json({
                recommendedCards: cardDocs,
                cookbook: user.cookbook,
                ingredients: user.pantry
            });
        }).catch(err => console.log(err));
    });
});

export default router;
