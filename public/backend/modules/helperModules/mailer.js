
module.exports.sendMail_= function( emailAddress ,emaiJs){
    var email 	= emaiJs;
    var server 	= email.server.connect({
       user:    "sahiljarial1999@gmail.com",
       password:"Computerislife",
       host:    "smtp.gmail.com",
       ssl:     true
    });
    
    // send the message and get a callback with an error or details of the message that was sent
    server.send({
       text:    "Welcome to Oscuro Web",
       from:    "sahiljarial1999@gmail.com",
       to:emailAddress,
       subject: "Welcome"
       //,atachment:
    }, function(err, message) { console.log(err || message); });
}

