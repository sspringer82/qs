const http = require('http');

http
  .createServer((req, res) => {
    res.end('Hallo client');
  })
  .listen(8080, () => {
    console.log('Server is listening');
  });
