$(document).ready(function(){
    barEventSetUp();
    subscriberEventSetup();
    setUpScreen();
    setSearchBar();
    loadData();
});


function loadFeedBackPage(){
               loadFooterData($("div.main-content"),"./main-content/feedBack.html");
}


function loadAboutUsPage(){   
 loadFooterData($("div.main-content"),"./main-content/aboutUs.html");
}