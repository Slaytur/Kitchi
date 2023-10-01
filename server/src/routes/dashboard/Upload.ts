import { Router } from 'express';
import { IncomingForm } from 'formidable';
import axios from 'axios';
import * as fs from 'fs';
import { User } from '../../models/user.model';

const router = Router();

router.post(`/`, (req, res) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err !== undefined && err !== null) {
            throw err;
        }

        if (files === undefined) {
            res.status(400).send(`400 Bad Request`);
            return;
        }

        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        void User.findOne({ username: (req as any).user.username }).then(user => {
            if (user == null) return res.status(404);

            if (files.fdata === undefined) return res.status(400);
            for (const file of files.fdata) {
                axios.post(`http://localhost:9035/objectdetect?userid=${user.id}`, fs.readFileSync(file.filepath, `binary`)).then(data => {
                    const ingredients = JSON.parse(JSON.stringify(data.data)).result.split(`,`);
                    return res.json(ingredients);
                }).catch((err: string) => console.log(err));
            }
        });
    });
});

export default router;
