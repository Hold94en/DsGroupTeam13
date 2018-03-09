$(function() {
	getLocations(function(ristoranti) {		//Success
		displayWaitingScreen();
		//inizializza le sections con 3 ristoranti

		
		//inizializzo l'onclick delle sections
		$('#containerSection').children().on('click', function() {
			showModalRestaurant(this);
		});
	}, displayError);
});

function showModalRestaurant(whichSect) {
	var id = $(whichSect).attr('data-id');

	getSingularLocation(id, function(resp) {
		//modifico il testo del modale
		$('#modal_ristorante_nome').text( resp.name );
		$('#modal_ristorante_descrizione').text( resp.description );
		$('#modal_ristorante_indirizzo').text( stringifyObject( resp.address ) );

		//rating part
		var ratingDiv = $('#modal-ristorante-rating');
		ratingDiv.empty();
		for(var i=0; i<resp.rating; i++) {
			ratingDiv.append('<span class="glyphicon glyphicon-star" aria-hidden="true"></span>');
		}

		//aggiungo le reviews
		var reviews = $('#modal_reviews_box');
		reviews.empty();
		$.each(resp.rewiews, function(key, rew) {
			//generate a new collapsable for each review
			reviews.append( createReviewPanel(key, rew.title, rew.text) );
		});

		$('#modal-ristorante').modal();
	}, displayError);
}

function displayWaitingScreen() {

}

function displayError() {
	console.log('Qualcosa è andato storto');
}

function createReviewPanel(key, title, text) {
	return '<div class="panel panel-default">' +
				'<div class="panel-heading" role="tab" id="headingOne">' +
					'<h4 class="panel-title">' +
					'<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+key+'" aria-expanded="true" aria-controls="collapseOne">' +
							title +
						'</a>' +
						'</h4>' +
					'</div>' +
				'<div id="collapse'+key+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">' +
					'<div class="panel-body">' +
					text +
						'</div>' +
					'</div>' +
			'</div>';
}