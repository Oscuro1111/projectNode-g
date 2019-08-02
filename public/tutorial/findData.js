function find() {
    let data = $("input#bar").val();
    let fillter_ = data.toUpperCase();

     let container = $("div.main-content");
     container[0].innerHTML="<div class='card'><div class='card-header'>Results:</div>";
     
    if (aList) {
        $.each(aList, function () {
            if (this.innerText.toUpperCase().indexOf(fillter_) > -1) {
                $(container).append("<li class='card-link'><a href='"+this.href+"' name='"+this.name+"'>"+this.innerText+"</a></li></div>");
            
            }

        });

        $.each($(container).find("a") ,function(){
            $(this).click(function($event){
                $event.preventDefault();
                loadTopicData(container , this);
            });
            
                   if(switchclass[0]!=true){
                           $("a#contentItem").click();
                   }
            
        });
    }
}