var path = require('path')
var httpServer = require('http').createServer();
var io = require('socket.io')(httpServer);
httpServer.listen(4000);

io.on('connection', (socket) => {
  console.log("new client connected");
  socket.on('apiCall', callAPI);
});

function callAPI(message, callback) {
  var { fnName, payload } = message;
  let apiFunc = require('./apiFunctions/' + fnName + ".js");
  if(typeof apiFunc === 'function') {
    callback(apiFunc(payload));
  }
}