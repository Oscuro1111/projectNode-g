$(document).ready(function() {
	$('select#hLocationCountryID').click(function() {
    
		$.getJSON('./dataList.json', {}).done(function($json) {
      //Empty any possible option find .
			$('select#hLocationStateID').empty();

			$.each($json.states, function() {
				let $split = this.split(':');

				$('select#hLocationStateID').append('<option value=' + $split[0] + "'>" + $split[1] + '</option>');
			});

			//change label
			$('label[for=hLocationStateID]').text($json.label + ':');
		});
	});

});
