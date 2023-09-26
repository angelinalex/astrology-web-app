const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer();

app.use('/', (req, res) => {
  proxy.web(req, res, {
    target: 'https://json.freeastrologyapi.com', // Change to the proxy server's endpoint
    changeOrigin: true,
  });
});

const PORT = 3001; // You can change this to any available port
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
