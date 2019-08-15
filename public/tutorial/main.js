var fCheck = false;

$(document).ready(function(){
    barEventSetUp();
    subscriberEventSetup();
    setUpScreen();
    setSearchBar();
    loadData();

    $(this).ajaxSend(function($event){
         if(fCheck===true){
        $("div.accordion").detach();
        fCheck=false;
         }
    });
});





function loadFeedBacks(){
    $.get("/userFeedBacks" ,{}).done(function(data){
        console.log("dataAppeneding");
        let bottomContainer = $("div#bottom-container");
         bottomContainer[0].innerHTML="<div class=accordion>"+"<h2 style='color:white;background-color:black;padding:5px 5px;'>Feedbacks:</h2>"+data+"</div>";
         fCheck=true;
         return 0;
    });
}

function loadFeedBackPage(){
               loadFooterData($("div.main-content"),"./main-content/feedBack.html");
               loadFeedBacks();
}

function loadAboutUsPage(){   
 loadFooterData($("div.main-content"),"./main-content/aboutUs.html");

}