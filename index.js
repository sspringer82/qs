const http = require('http');

http
  .createServer((req, res) => {
    debugger;
    console.log(req.url);
    res.end('Hallo client');
  })
  .listen(8080, () => {
    console.log('Server is listening');
  });

// github.com/sspringer82/qs
