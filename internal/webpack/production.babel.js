/* eslint-disable import/no-extraneous-dependencies */
import merge from 'webpack-merge';
import OfflinePlugin from 'offline-plugin';
import common from './common';

const production = {
  mode: 'production',
  plugins: [
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      caches: {
        main: [':rest:'],
        additional: ['*.chunk.js'],
      },
      safeToUseOptionalCaches: true,
      AppCache: false,
    }),
  ],
};

export default merge(common, production);
