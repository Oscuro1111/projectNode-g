//Setting Up data rendrin

var itemPrevClicked=[];

function loadList(jsonPro, uli,topicName) {
	let i;
	$(uli).append("<li class='list-group-item'><span id='"+topicName+"' class='card-header'>"+topicName+"</span></li>");
	$(("div#List li span#"+topicName)).css({"background-color":"#7615f5","color":"white","font-size":"19px"});
	for (i = 0; i < jsonPro.length; i++){
		let temp = jsonPro[i].split(':');
		$(uli).append("<li class='list-group-item'><a href='" + "javascript:void(0)'" + " name='" + temp[1] + "'>" + temp[0] + '</a></li>');
	}
}

function loadData() {
	var container = $('div.main-content');

	//Default Load
	$.get(
		'./main-content/content-one.html',
		{},
		function($data) {
			$(container).append($data);
		},
		'text'
	);

	listLoader(container);
}

function listLoader(container) {
	$.getJSON('./main-content/listofTopics.json', {}).done(function(json) {
		var uli = $('div#List').empty();
	
		//Loading List
		for (let key in json) {
			
			loadList(json[key], uli,key);
		}

		let lis = $('div#List').find('a');

		$.each(lis, function() {
			$(this)
				.css({
					color: 'black',
				})
				.on('click', function() {
					//loadTopicData(container, this);
					if(itemPrevClicked[0]){
						$(itemPrevClicked[0]).removeClass("list-group-item active").addClass("list-group-items");
						itemPrevClicked.pop();           
					}
					$(this).addClass("list-group-item active");
					itemPrevClicked.push(this);
				});
		});
	});
}
