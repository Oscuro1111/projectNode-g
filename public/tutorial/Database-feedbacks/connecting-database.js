
var con;
module.exports.connectToDB= function(mysql){
        con = mysql.createConnection({
        host:"db4free.net",
        port:3306,
        user:"oscuro",
        password:"Computerislife",
        database:"oscurodb"
    });
    
    
    con.connect(function(err){
        console.log("update");
          if(err) throw err;
          console.log("connected");

    });

    return con;
}