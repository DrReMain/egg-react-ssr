'use strict';
require('babel-core/register')({
  plugins: [
    ['babel-plugin-transform-require-ignore', {
      extensions: ['.less', '.css']
    }],
  ]
});
const React = require('react');
const { renderToString } = require('react-dom/server');

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      const App = require('../../client/views/Index').default;
      const content = renderToString(
        React.createElement(App, {
          word: 'world'
        })
      );
      const staticPath = require('../public/assets.json');

      await this.ctx.render('index.tpl', {
        content,
        staticPath
      })
    }

    async test() {
      const App = require('../../client/views/Test').default;
      const content = renderToString(
        React.createElement(App, {
          word: 'test'
        })
      );
      const staticPath = require('../public/assets.json');
      await this.ctx.render('test.tpl', {
        content,
        staticPath,
      })
    }
  }

  return HomeController;
};
