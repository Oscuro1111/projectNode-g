module.exports.sendMail_ =function(emailAddress,Jq){
    console.dir(Jq);
     var $ = Jq();
    jq.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'afe7ee3c3c82e56f2fa65234b3ea40d5-us3',//API key
          'message': {
            'from_email': 'nanotiksmith@outlook.com',
            'to': [
                {
                  'email': emailAddress,
                  'name': '',
                  'type': 'to'
                }
              ],
            'autotext': 'true',
            'subject':'Welcome',
            'html': '<h3>Thanks for subscribing to Oscuro web.</h3>'
          }
        }
       }).done(function(response) {
         console.log(response); // if you're into that sorta thing
       });
    
}