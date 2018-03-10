$(function() {
	getLocations(function(ristoranti) {		//Success
		displayWaitingScreen();
		//inizializza le sections con 3 ristoranti

		//inizializzo l'onclick delle sections
		$('#containerSection').children().on('click', function() {
			showModalRestaurant(this);
		});
	}, displayError);

	$('#btn-us').on('click', function () {
		$('#modal-about').modal('toggle');
		$('html, body').animate({
			scrollTop: $("#credits-title").offset().top
		}, 1000);
	});
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

		//initializing carousel
		var carousel = $('#modal_carousel_restaurant');
		carousel.empty();

		carousel.append(createCarousel(resp.gallery));
		
		$('#modal-ristorante').modal();
		carousel.carousel();
		fixForModalCarousel();
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

function createCarousel(images) {
	if(images.length === 0) {
		return '';
	}
	var htmlCarousel = '';
//	htmlCarousel = 		'<ol class="carousel-indicators">' +
//							'<li data-target="#modal_carousel_restaurant" data-slide-to="0" class="active"></li>' +
//							'<li data-target="#modal_carousel_restaurant" data-slide-to="1"></li>' +
//						'</ol>' +
	htmlCarousel += 	'<div class="carousel-inner" role="listbox">';
	for(var i=0; i < images.length; i++) {
		if(i !== 0) {
			htmlCarousel +=	'<div class="item">';
		} else {
			htmlCarousel +=	'<div class="item active">';
		}
		htmlCarousel +=			'<img src="'+images[i]+'" alt="...">' +
							'</div>';
	}
	htmlCarousel +=		'</div>' +
					
						'<a class="left carousel-control" href="#modal_carousel_restaurant" role="button" data-slide="prev">' +
							'<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>' +
							'<span class="sr-only">Previous</span>' +
						'</a>' +
						'<a class="right carousel-control" href="#modal_carousel_restaurant" role="button" data-slide="next">' +
							'<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>' +
							'<span class="sr-only">Next</span>' +
						'</a>';
	return htmlCarousel;
}

function fixForModalCarousel() {
	setTimeout(function() {
		/* Il carousel non viene inizializzato correttamente quando si effettua l'animazione
		 * questa funzione aspetta che l'animazione venga completata prima di forzare
		 * il cambio di immagine del carousel cliccando automaticamente su uno dei due bottoni 
		 * per ciclare le immagini, un delay superiore a 150 dovrebbe funzionare comnque
		*/
		$('#modal_carousel_restaurant a:first').click();
	}, 605);
}