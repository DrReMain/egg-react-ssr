'use strict';
require('babel-core/register');
const React = require('react');
const { renderToString } = require('react-dom/server');

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      const App = require('../../client/views/Index').default;
      const content = renderToString(
        React.createElement(App, {
          word: 'WTF'
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
          word: 'shit'
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
