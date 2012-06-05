/* Simple web server in node.js
 *
 *     $ npm install connect
 *     $ node server.js
 *     ... server is running on port 8181 ...
 *
 */
var connect = require('connect');
var app = connect()
  .use(connect.logger())
  .use(connect.static('public'))
  .listen(8181);
