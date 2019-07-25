const http = require('http');

const argv = process.argv.slice(2)
const requestsCount = isNaN(Number(argv[0])) ? 1 : Number(argv[0]);
let typeRequest = argv[1] === '--sync' ? 'sync' : 'async';
let responses = [];

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

console.log(typeRequest, requestsCount)

var createRequest = (requestsCount, type) => {

  if (type == 'async') {
    asyncRequest(requestsCount);
    return;
  }

  if (type == 'sync') {
    syncRequest(requestsCount);
    return;
  }

  console.log('unknown request type!');
};

const asyncRequest = (requestsCount) => {
  responses = new Array(requestsCount);
  for (var i = 0; i < requestsCount; i++) {
    responses[i] = new Promise((resolve, reject) => {
      let newRequest = http.request(options);
      newRequest.end();
      resolve('Ok')
    });
  }
  Promise.all(responses).then(() => {
    console.log(responses)
  })
};

const syncRequest = (requestsCount) => {
  for (var i = 0; i < requestsCount; i++) {
    let newRequest = http.request(options);
    newRequest.end();
    console.log("request sended");
  }
};

createRequest(requestsCount, typeRequest);