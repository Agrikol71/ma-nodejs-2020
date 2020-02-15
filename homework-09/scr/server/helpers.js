const http = require('http');

function endResponse(response, code) {
  response.writeHead(code, { 'Content-Type': 'text/html' });
  response.end(http.STATUS_CODES[code]);
}

module.exports = {
  endResponse,
};
