import path from 'path';
import mock from '../mock';

let mockRouteMap = {};
function matchRoute(req) {
  let url = req.url;
  let method = req.method.toLowerCase();
  let routeList = mockRouteMap[method];

  return routeList && routeList.find((item) => item.path === url);
}

export default (options = {}) => {
  // 获取mock文件入口，默认index
  options.entry = options.entry || './mock/index.js';

  //转换为绝对路径
  if (!path.isAbsolute(options.entry)) {
    options.entry = path.resolve(process.cwd(), options.entry);
    console.log(options.entry);
  }
  return {
    configureServer: async function ({ middlewares: app }) {
      console.log(await import(options.entry));
      const mockObj = { ...(await import(options.entry)) }.default;
      console.log(mockObj);
      // 路由匹配的中间件
      const middleware = (req, res, next) => {};
      app.use(middleware);
    },
  };
};
