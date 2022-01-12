const {createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // 代理到B站服务器  
  app.use('/bilibili', createProxyMiddleware({ 
    target: 'https://api.bilibili.com' ,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
     "^/bilibili": ""
    },
 }));
 // 代理到丁大哥服务器  
 app.use('/api', createProxyMiddleware({ 
    target: 'http://82.157.146.87:1234' ,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
     "^/api": ""
    }
 }));
};