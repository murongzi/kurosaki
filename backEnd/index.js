var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {
    "Content-Type":"application/json"
  });

  res.end(JSON.stringify({
    code:0,
    results:[
      {
        id:1,
        name:'tom'
      },
      {
        id:2,
        name:'helen'
      }
    ]
  }));
  
}).listen(8888);
