const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://api.football-data.org',
      changeOrigin: true,
      headers: {
        'X-Auth-Token': 'e71f953349644f328247999d2453bba5'
      }
    })
  );
};
