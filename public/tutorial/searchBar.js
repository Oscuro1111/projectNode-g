
var flg=0;
var aList;
var dList;

function setSearchBar(){
var event=function($event){
  let keypressed = $event.which||$event.keyCode;
  if(keypressed==40||keypressed==38)
  {
         return;
  }
  let searchBar = $("input#bar").val() ;
  

  let fillter = searchBar.toUpperCase();
if(flg==0){
   aList = $("div#List").find("a");
   dlist = $("datalist#dList");
   flg=1;
}
  $(dlist).empty();
  $.each( aList ,function(){
    if(this.innerText.toUpperCase().indexOf(fillter)>-1){
                  $(dlist).append("<option>"+this.innerText+"</option>");
    }
  });
};

$("input#bar").keydown(event);

}