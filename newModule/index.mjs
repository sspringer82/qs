import http from 'http';
import { server } from './module';

http.createServer(server).listen(8080, () => {
  console.log('Server is really listening');
});

// github.com/sspringer82/qs

// nodemon.io - restartet den prozess automatisch

// installation:
// npm install -g nodemon

// start der applikation:
// nodemon index.js
