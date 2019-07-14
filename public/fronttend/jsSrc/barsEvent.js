//Author :Oscuro
var check = 0;
$(document).ready(function () {

    var bars = $('i#bars');
    
    if (bars) {
        $(bars).on('click', function ($event) {
            if (this.style.backgroundColor == "") {
                ++check;
                $(this).css({
                    "background-color": "#00ff0c"
                });
            } else {
                $(this).css({
                    "background-color": ""
                });
                --check;
            }
        });
    }
    $(window.document).on('click', function ($event) {
        if (check > 0) {
            $(bars).css({
                "background-color": ""
            });
            check--;
        }
    });
    

});