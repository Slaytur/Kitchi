import { Router } from 'express';

import passport from '../../modules/passport';

const router = Router();

router.get(`/`, passport.authenticate(`discord`, { failureRedirect: `/` }), (req, res) => res.redirect(`/api/auth/callback`));

export default router;
