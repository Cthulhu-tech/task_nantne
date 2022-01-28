const http = require("http");
const pug = require('pug');
 
http.createServer(function(request, response){
     if(request.url === "/"){
        const html = pug.compileFile(__dirname + '/src/views/index.pug');
        response.writeHead(200, {"Content-Type": 'text/html'});
        response.end(html());
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