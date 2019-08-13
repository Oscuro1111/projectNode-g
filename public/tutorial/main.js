$(document).ready(function(){
    barEventSetUp();
    subscriberEventSetup();
    setUpScreen();
    setSearchBar();
    loadData();
});




function loadFeedBacks(){
    $.get("/userFeedBacks" ,{}).done(function(data){
        console.log("dataAppeneding");
        let bottomContainer = $("div#bottom-container");
         bottomContainer[0].innerHTML="<div class=accordion>"+data+"</div>";
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