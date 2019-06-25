var fs = require('fs');
var http = require('http');
var nStatic = require('./public/backend/modules/node_modules/node-static/lib/node-static');

var fileServer = new nStatic.Server(__dirname);

var fileCache = {};


function loadFileSync(path) {
    if (fileCache[path] == path) {
        return fileCache[path];
    } else {
        fileCache[path] = (fs.readFileSync(path)).toString();
        return fileCache[path];
    }
}


function extention(req) {

    let temp = '';
    let num = req.url.indexOf('.');

    for (let x = num; x < req.url.length; x++) {
        temp += req.url[x];
    }
    return temp;
}


var Home;
fs.readFile("./index.html", function (err, data) {
    if (err) {
        throw err;
    }
    else {
        Home = data.toString();
    }

});

var PORT = process.env.PORT||8080;


function main() {

    console.log(" Server status:Running..." + "\nhost:localhost on Port:"+PORT);
    http.createServer(function (req, res) {

        console.log("Requested File:" + req.url);


        if (req.url != '/') {


            let exp = extention(req);

            switch (exp) {
                case '.css':
                    {

                        let data = loadFileSync(__dirname + req.url);
                        res.writeHead(200, { "Content-Type": "text/css" });
                        res.write(data);
                        res.end();
                    }
                    break;

                case '.html':
                    {
                        let data = loadFileSync(__dirname + req.url);
                        res.writeHead(200, { "Content-Type": "text/html" });
                        res.write(data);
                        res.end();
                    }
                    break;

                case '.js':
                    {
                        fileServer.serve(req, res);
                    }
                    break;
                case ".jpg":
                    {
                        fileServer.serve(req, res);
                    }
                    break;
                default:

                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.write("<h1>404:Not Found</h1>");
                    res.end();
                    break;
            }
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(Home);
            res.end();
        }
    }).listen(PORT);

}

setTimeout(main, 100);


