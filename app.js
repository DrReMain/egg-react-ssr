const webpack = require('webpack');
const KWM = require('koa-webpack-middleware');
const devMiddleware = KWM.devMiddleware;
const hotMiddleware = KWM.hotMiddleware;
const webpackConfig = require('./config/webpack/webpack.dev');
const compiler = webpack(webpackConfig);

const devMiddlewareInstance = devMiddleware(compiler, {
  noInfo: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: false
  },
  publicPath: '/public/',
  stats: {
    colors: true
  }
});

const hotMiddlewareInstance = hotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
});

module.exports = app => {
  app.beforeStart(function () {
    app.use(devMiddlewareInstance);
    app.use(hotMiddlewareInstance);
  })
};
