[***egg***](https://github.com/eggjs/egg/)是ali基于koa封装的后端框架，鉴于egg的易用性，在此基础上搭建react的服务端渲染骨架。

```bash
$ git clone git@github.com:DrReMain/egg-react-ssr.git
$ cd egg-react-ssr
$ npm install
# dev
npm run dev
# prod
npm run dist
npm run start
```

- [ ] 完善 webpack 基本配置并分离 webpack 环境
- [ ] 统一egg与webpack的环境
- [ ] 优化webpack编译速度
- [ ] 单页面 react-router & redux 支持