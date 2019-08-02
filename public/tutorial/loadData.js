function loadTopicData(container, listItem) {
       $.get('' + $(listItem).attr('name'), {}).done(function (data) {
              container[0].innerHTML = data;
       }, 'html');
}