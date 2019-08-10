//Author : Oscuro Smith

var fs = require('fs');
var http = require('http');
var {parse} = require('./node_modules/querystring');
//var queryString = require('querystring');
var emailjs = require('./node_modules/nodemailer');
var mailer  = require('./public/backend/modules/helperModules/mailer.js');
//var ua_ = require('./public/backend/modules/node_modules/ua-parser-js');
//var jsdom = require('./public/backend/modules/node_modules/jsdom');
var nStatic    = require('./public/backend/modules/node_modules/node-static/lib/node-static');
//var jquery = require('./public/backend/modules/node_modules/jquery')
var mysql=(require("./node_modules/mysql"));
var dataBase = require("./public/tutorial/Database-feedbacks/connecting-database.js");
var DB= require("./public/tutorial/Database-feedbacks/setUpDB.js");
var checkTable  = require("./public/tutorial/Database-feedbacks/checkNewTables.js");
var fdbOperations = require("./public/tutorial/Database-feedbacks/dataBaseOperations.js");
var fileServer = new nStatic.Server(__dirname);



var fileCache  = {};

var pathCache  = {};

var dbQuery =DB.setUpDB(dataBase,mysql,fs,checkTable);//Query Object

function loadFileSync(path) {
    if (false) {//During Test Mode 
        return fileCache[path];
    } else {
        fileCache[path] = (fs.readFileSync(path)).toString();
        pathCache[path]=path;
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


     var feedBackHandler=new fdbOperations.QueryfeedBackOpertations(dbQuery);
    console.log(" Server status:Running..." + "\nhost:localhost on Port:"+PORT);
    http.createServer(function (req, res) {

        console.log("Requested File:" + req.url);
if(req.url=='/feedback'){
    let body='';
           req.on('data' , function(chunk){
               body+=chunk.toString();

                console.log(parse(body));//store

                // data base storing work
          feedBackHandler.insertdata(parse(body));
           });        
           res.writeHead(200,{"Content-Type":"text/html"});
           res.write(loadFileSync(__dirname+"/index.html"));
           res.end();
}
else if(extention(req)==".json"){

    let data = loadFileSync(__dirname+req.url);
    res.writeHead(200, {"Content-Type": "text/json"});
    res.write(data);
    res.end();

}else  if(req.url.split('?')[0]=='/subscriber')//Testing
          {
            var email=req.url.split('?')[1].split('=')[1];

            let e1   = email.split('%40')[0];
            let e2   = email.split('%40')[1];

            var emailref=e1+'@'+e2;

            mailer.sendMail_(emailref , emailjs);
            
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(Home);
            res.end();
        }else if (req.url != '/') {


            let exp = extention(req);

            switch (exp) {

                case '.text':
                {
                    let data = loadFileSync(__dirname+req.url);
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.write(data);
                    res.end();
                }
                break;
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



setTimeout(main, 1000);


