import merge from 'webpack-merge';
import common from './webpack.common';

import { DefinePlugin } from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { resolve } from 'path';

const config = merge(common, {
    mode: `production`,

    output: {
        path: resolve(__dirname, `../dist`),
        filename: `assets/js/[name].[chunkhash:8].js`,
        clean: true
    },

    plugins: [
        new DefinePlugin({
            API_URL: `"/api"`
        }),
        new CopyPlugin({
            patterns: [{
                from: resolve(__dirname, `../public`),
                to: resolve(__dirname, `../dist`),
                globOptions: {
                    ignore: [`**/index.html`]
                }
            }]
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: [`**/*.LICENSE.txt`],
            protectWebpackAssets: false
        })
    ]
});

export default config;
