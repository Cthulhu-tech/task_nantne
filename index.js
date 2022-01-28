const http = require("http");
const pug = require('pug');
const fs = require('fs');

http.createServer(function(request, response){
    console.log(request.url)
    if(request.url.includes('css')){
        const css = fs.readFileSync(__dirname + '/src/style/style.css', 'utf8');
        response.writeHead(200, {"Content-Type": 'text/css'});
        response.end(css);
    }
    if(request.url === "/"){
        const html = fs.readFileSync(__dirname + '/src/pug/index.html', 'utf8');
        response.writeHead(200, {"Content-Type": 'text/html'});
        response.end(html);
    }else{
        response.writeHead(302, 
            {
                "location": '/',
                "Content-Type": "application/json"
            }
        );
        response.end('redirect');
    }
}).listen(3000);