const path = require('path');
const webpackConfig = require('./webpack.config');

module.exports = {
  webpackConfig,
  template: {
    head: {
      links: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans',
      }],
    },
  },
  require: [
    path.join(__dirname, 'src/assets/styles/_resources.styl'),
  ],
  skipComponentsWithoutExample: true,
  sections: [{
    name: 'Components',
    sections: [{
      name: 'UIKit',
      components: 'src/components/UI/**/index.jsx',
    }, {
      name: 'HOCs',
      components: 'src/hocs/**/index.{js,jsx}',
    }],
  }],
};
