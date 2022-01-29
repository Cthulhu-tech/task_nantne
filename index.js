const http = require("http");
const pug = require('pug');
const fs = require('fs');
const path = require('path');

http.createServer(async (request, response) => {

    const pathRequest = request.url;
    const name = path.parse(pathRequest).name
    const ext = path.parse(pathRequest).ext;

    switch (ext) {
        case '.js' :
                fileResponse(name, response, 'text/javascript', '.js');
            break;
        case '.css' :
                fileResponse(name, response, 'text/css', '.css');
            break;
        case '.png' :
                fileResponsePng(pathRequest , response);
            break;
        case '.jpg' :
            fileResponsePng(pathRequest , response);
            break;
        default:
                if(request.url === "/"){
                    const html = fs.readFileSync(__dirname + '/src/pug/index.html', 'utf8');
                    response.writeHead(200, {"Content-Type": 'text/html'});
                    response.end(html);
                }else if(request.url === "/favicon"){
                    response.end();
                }else{
                    response.writeHead(302,
                        {
                            "location": '/',
                            "Content-Type": "application/json"
                        }
                    );
                    response.end('redirect');
                }
            break;
    }
}).listen(3000);

const fileResponse = async(pathToPage, response, contentType, documentType) => {
    try
    {
      const document = await fs.readFileSync(path.join(`${__dirname}//src//style//${pathToPage}${documentType}`), {
        encoding: 'utf8'
      });  
      response.writeHead(200, {'Content-Type': contentType ,'Content-Length': document.length});
      response.write(document);
      response.end();
    }
    catch (err)
    {
      response.writeHead(500, {'Content-Type': contentType});
      response.end();
    }
}

const fileResponsePng = (pathToPage, response) => {
    try
    {
      const document = fs.readFileSync(path.join(`${__dirname}//src${pathToPage}`));  
      response.writeHead(200, {'Content-Type': 'text/png' ,'Content-Length': document.length});
      response.write(document);
      response.end();
    }
    catch (err)
    {
      response.writeHead(500, {'Content-Type': 'text/png'});
      response.end();
    }
}