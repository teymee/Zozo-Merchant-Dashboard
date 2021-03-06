/*
* Martfury - Admin Template
* Author: nouthemes
* Homepage: https://themeforest.net/user/nouthemes/portfolio
* Created at: n/a
* Updated at: n/a

* */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'Zozo Merchant',
        titleDescription: 'Admin Dashboard',
    },
    eslint: {
        ignoreDuringBuilds: true,
      },
};

module.exports = withPlugins([withImages(), nextSettings]);
