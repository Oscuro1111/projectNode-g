function validate() {
    console.log("ok");
    let emailName = $('input#inputSub').val();
    var emailReg =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailName);
    if (!emailReg) {
        alert("Invalid Email...!!!!!!");
    } else {
        console.log("Validated");
        $("form#form_").attr({
            "action": "/subscriber?email="+emailName
        }).submit();
    }
}