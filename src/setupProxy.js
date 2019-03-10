//proxy 설정을 통해 cors 문제 해결가능
//하지만 이 프로젝트에선 해결 하지 못했다.

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/users', {
      target: 'https://order-app-7e078.firebaseio.com/',
      changeOrigin: true,
    })
  );
};