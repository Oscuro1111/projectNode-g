
module.exports.sendMail_= function( emailAddress, nodemailer){

   let transport = nodemailer.createTransport({
    service:"gmail",
    auth: {
       user: 'sahiljarial1999@gmail.com',
       pass: 'Computerislife;'
    }
});

var email=w(emailAddress);
console.log(email);
const message = {
    from: 'sahiljarial1999@gmail.com', // Sender address
    to:email  ,         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};
console.log("eamil:"+emailAddress);
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});


}


function w(e){
   let d =e.indexOf('.');
   var temp="";

   for(let i =0; i<d;i++){
    temp+=e[i];
   }

   return temp+".com";
}

