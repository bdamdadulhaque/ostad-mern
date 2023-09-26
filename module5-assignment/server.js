
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

    if(req.url == "/"){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('This is Home Page');
        res.end();
    }
    else if(req.url == "/about"){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('This is About Page');
        res.end();
    }
    else if(req.url == "/contact"){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('This is Contact Page');
        res.end();
    }
    else if(req.url == "/file-write"){
        var createdFile = fs.writeFile('demo.txt', 'hello world', function(error){

            if(error){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('Error, file is not created');
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File created successfully');
                res.end();
            }

        });
    }

});


server.listen(3000);

console.log("Server is running on port 3000");