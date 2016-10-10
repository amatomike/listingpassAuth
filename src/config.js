require('babel-polyfill');
const config = require('config');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '3000',
  apiUrl: config.get('apiUrl'),
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Listingpass',
    description: '...',
    head: {
      titleTemplate: 'ListingPass: %s',
      meta: [
        { name: 'description', content: 'Simple, secure authentication for React + Redux.' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'ListingPass Auth' },
        { property: 'og:image', content: 'https://listingpass.com/img/logonav.png' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'Listingpass Auth' },
        { property: 'og:description', content: '...' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@amatotech' },
        { property: 'og:creator', content: '@mikeamato' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  },

}, environment);
