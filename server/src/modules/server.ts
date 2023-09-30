import config from '../../.config/config';

import Express from 'express';

import MongoStore from 'connect-mongo';
import session from 'express-session';

import helmet from 'helmet';

import passport from './passport';

// Error logging.
process.on(`uncaughtException`, err => console.log(err));

// Express app.
const app: Express.Application = Express();

// Express extension configurations.
app.use(Express.json({ limit: `5mb` }));
app.use(Express.urlencoded({ limit: `5mb`, extended: true }));

// Express session.
app.use(session({
    secret: (process.env.SESSION_SECRET as string),
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    })
}));

// Passport middleware.
app.use(passport.initialize());
app.use(passport.session());

// Express middleware.
app.use(helmet());

// Trust forwarding headers from NGINX.
app.set(`trust proxy`, true);

app.use((req, res, next) => {
    // CORS headers.
    res.header(`Access-Control-Allow-Origin`, config.baseURL.includes(`localhost`) ? `http://localhost:3000` : config.domain);
    res.header(`Access-Control-Allow-Methods`, `POST, GET, OPTIONS, PUT, DELETE, PATCH, HEAD`);
    res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept`);

    // Used to allow credentials headers to be sent in authentication information requests.
    // The TypeScript declaration is improperly specified for this header, so override it.
    (res.header as (name: string, value: boolean) => void)(`Access-Control-Allow-Credentials`, true);

    next();
});

export default app;
