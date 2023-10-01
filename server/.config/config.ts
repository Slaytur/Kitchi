import { name, version } from '../package.json';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import * as dotenv from 'dotenv';
dotenv.config();

interface Args {
    mode: `prod` | `dev`
    baseURL: string
    port: number
}

const argv = (yargs(hideBin(process.argv)).options({
    mode: { type: `string`, default: `dev` },
    baseURL: { type: `string`, default: `http://localhost:8080/api` },
    port: { type: `number`, default: 8080 }
}).argv as Args);

const config = {
    name,
    mode: argv.mode,

    domain: argv.baseURL.slice(0, argv.baseURL.length - 4),
    baseURL: argv.baseURL,
    port: argv.port,

    version
};

export default config;
