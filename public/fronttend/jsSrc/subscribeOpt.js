$(document).ready(function(){
    var sub=$('span#sub');
    $(sub).css({"cursor":"pointer"});
    var input = document.getElementById('inputSub');

    $(sub[0]).on('click',function($event){
            input.focus();
    });
});