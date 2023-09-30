import { type Router } from 'express';
import * as path from 'path';

import log from './log';
import readDirectory from './readDirectory';

const registerRoutes = async (router: Router): Promise<void> => {
    const routes = readDirectory(path.resolve(__dirname, `../routes`));

    for (const route of routes) {
        const routePath = `/api/${(route.split(process.platform === `win32` ? `\\` : `/`).slice(-2).join(`/`).slice(0, -3).toLowerCase())}`;
        const routeController = await import(route);

        router.use(routePath, routeController.default);
        log(`yellow`, `Loaded route ${routePath}.`);
    }
};

export default registerRoutes;
