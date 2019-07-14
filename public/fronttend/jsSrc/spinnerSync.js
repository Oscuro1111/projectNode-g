
var doneRequest = false;

$(document).ready(function () {


  var num = 0;
  var id;
  var sync = $('button#syncParent').children('i');
  $('button#syncParent').on('click', function ($event) {
    if (doneRequest != false) {
      return;
    } else {
      $(this).attr({'title':'prev request in process!'});
      $(this).tooltip('show');
                 
    }
    doneRequest = true;

    $event.preventDefault();

    $(this).children('span').html('Loding...<br/>');

    $(sync).addClass('fas fa-sync').css({
      "font-size": "25px"
    });
    id = setInterval(function (sync_) {

      $(sync_).css({
        'transform': "rotate(" + num + "deg)"
      });
      if (num == 360) {
        num = 0;
      } else {
        num += 12;
      }
    }, 20, sync);

    setTimeout(loadDocData, 3000, id);

  });


});

//Ajax call
function loadDocData(id) {

  console.log('ok', id);
  //Logic goes here
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
      (function (xhttp, id_) {

        let data = xhttp.responseText;
        let syncButton = $('button#syncParent').detach();
        let parent = $('#appendTo');
        $(syncButton).children('i').removeClass('fas fa-sync');
        $(syncButton).children('span').text('Load More');

        clearInterval(id_);
        doneRequest = false;
        $(parent).append(data, syncButton);
        $('[data-toggle="tooltip"]').tooltip('dispose');
        $('[data-toggle="tooltip"]').attr({'title':''});


      })(this, id);
    }
  };

  xhttp.open("GET", "../../../serverContent/booksLoad.text", true); //Aync :true
  xhttp.send();

}