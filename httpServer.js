var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {

    console.log('request starting...');

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    path.exists(filePath, function(exists) {

        if (exists) {
            fs.readFile(filePath, function(error, content) {
                if (error) {
                    response.writeHead(500);
                    response.end();
                }
                else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                }
            });
        }
        else {
            response.writeHead(404);
            response.end();
        }
    });

}).listen(process.env.PORT);
<<<<<<< HEAD

console.log('Hallo Server running at http://5by5.lunky.c9.io/' );
//console.log('Server running at http://127.0.0.1:8125/');
=======
console.log('Server running  ');
>>>>>>> 71be1a497a44fee70e1ef6f1e07803e170a23405
//}).listen(process.env.PORT);
//console.log('Server running');