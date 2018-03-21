const http = require('http');
const myModule = require('./module');

http.createServer(myModule.server).listen(8080, () => {
  console.log('Server is really listening');
});

// github.com/sspringer82/qs

// nodemon.io
// npm install -g nodemon
