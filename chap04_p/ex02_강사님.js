const http = require('http');
const url = require('url');
const querystring = require('querystring');

var port = 3000;
const server = http.createServer();

server.listen(port, function () {
    console.log('웹 서버 대기중... : %d', port);
});

server.on('connection', function (socket) {
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다.');
});

server.on('close', function () {
    console.log('웹 서버 종료됨.');
});

server.on('request', function (req, res) {
    var urlp = url.parse(req.url, true);
    //console.log(urlp);
    var samplequery = "id=hong&password=1234";
    var query = querystring.parse(samplequery);
    console.log(query.id);
    console.log(query.password);

    if (urlp.pathname == '/login') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write(`<h2>Login page</h2>`);
        res.end();
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write(`<h2>url.search : ${urlp.search}</h2>`);
        res.write(`<h2>url.pathname : ${urlp.pathname}</h2>`);
        res.write(`<h2>url.path : ${urlp.path}</h2>`);
        res.end();
    }
    });
