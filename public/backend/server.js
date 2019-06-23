 var fs   =require('fs');
 var http = require('http');


 var fileCache={}; 


function loadFileSync(path){
    if(fileCache[path]==path){
        return fileCache[path];
    }else{
        fileCache[path]=(fs.readFileSync(path)).toString();
        return fileCache[path];
    }
} 

 var Home;
  fs.readFile("../index.html",function(err,data){
               if(err){
                   throw err;
               }
               else{
                   Home=data.toString();
               }

 });

var PORT = 8080;


function main(){

    console.log(" Server status:Running..."+"\nhost:localhost Port:8080");
     http.createServer(function(req,res){
                
            console.log("Requested File:"+req.url);

            if(req.url!="/"){
              switch(req.url){
                   case req.url.match(/.css$/g):
                  {
                        let data=loadFileSync("../fronttend/stylesheets"+req.url);                
                        res.writeHead(200,{"Content-Type":"text/css"});
                        res.write(data);
                        res.end();
                   }
                   break;

                   case req.url.match(/.html$/g):
                    {
                       let data =loadFileSync("../fronttend/htmlSrc"+req.url);
                       res.writeHead(200,{"Content-Type":"text/html"});
                       res.write(data);
                       res.end();
                    }
                       break;

                    case req.url.match(/.js$/g):
                   {
                        let data=loadFileSync("../fronttend/jsSrc"+req.url);                
                        res.writeHead(200,{"Content-Type":"text/javascript"});
                        res.write(data);
                        res.end();
                   }
                        break; 
                   
                  default: 
                         res.writeHead(200,{"Content-Type":"text/html"});
                         res.write("<h1>404:Not Found</h1>");
                         res.end();
                         break;
              }
                       
            }else{
                   res.writeHead(200,{"Content-Type":"text/html"});
                   res.write(Home);
                   res.end();
            }

     }).listen(PORT);

}

 setTimeout(main,100);


