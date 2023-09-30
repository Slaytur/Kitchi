import config from '../.config/config';

import Mongoose from 'mongoose';

import app from './modules/server';

import log from './utils/log';
import * as logExtra from './utils/logExtra';
import registerRoutes from './utils/registerRoutes';

/**
 * Start the API server.
 */
const main = async (): Promise<void> => {
    // Boot screen.
    console.clear();

    logExtra.logSplash();
    logExtra.logHeader();

    // Database connection.
    Mongoose.set(`strictQuery`, true);
    await Mongoose.connect((process.env.MONGO_URI as string));

    log(`green`, `Connected to database.`);
    logExtra.logHeader();

    // Register all routes.
    await registerRoutes(app);
    logExtra.logHeader();

    // Start the server on the specified port.
    app.listen(config.port, () => {
        log(`green`, `Server is running on port ${config.port}.`);
        logExtra.logHeader();
    });
};

void main();
