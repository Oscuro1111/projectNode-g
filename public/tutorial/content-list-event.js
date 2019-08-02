
//Author: Oscuro Smith
var switchclass=[false,"columns-sm-8","columns-sm-12",1];

function setUpScreen(){


  if(screen.width<1500){
    $("div#List").toggle('slide');
    
    $('div#main-container').removeClass(switchclass[1]); 
    $('div#main-container').addClass(switchclass[2]); 
    $('div#main-container').css({"width":"100%"});
    switchclass[3]=2;
    switchclass[0]=true; 
  }    
    $('a#contentItem').click(function($event){
        $event.preventDefault();

        $("div#List").toggle('slide');

        if(switchclass[0]==false){
          if(switchclass[3]==2){

            $('div#main-container').removeClass("columns-sm-3"); 
            $('div#main-container').addClass("columns-sm-12"); 

          }else{
        $('div#main-container').removeClass(switchclass[1]); 
        $('div#main-container').addClass(switchclass[2]); 
          }
        $('div#main-container').css({"width":"100%","float":""}); 
        
        switchclass[0]=true;

        }else{
          if(switchclass[3]==2){
            $('div#main-container').removeClass('columns-sm-12');
            $('div#main-container').addClass('columns-sm-3');
            $('div#main-container').css({"width":"","float":"left"});
            switchclass[0]=false;
          }else{
        $('div#main-container').removeClass('columns-sm-12');
        $('div#main-container').addClass('columns-sm-8');
        $('div#main-container').css({"width":""});

        switchclass[0]=false;
          }
        }
    }).mouseover(function($event){
             $(this).css({"background-color":"lightgreen","font-size":"18px","padding":"15px" ,"box-shadow":"3px 3px black"});
    }).mouseleave(function(){

      $(this).css({"background-color":"white","font-size":"16px","padding":"12px","box-shadow":"0px 0px "});
    });
}