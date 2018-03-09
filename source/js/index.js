$(function() {
	getLocations(function(ristoranti) {		//Success
		console.log(ristoranti);
	}, function() {							//Error
		console.log('Qualcosa è andato storto');
	});
});



$('#btn-us').on('click', function () {
	$('#modal-about').modal('toggle');
	$('html, body').animate({
        scrollTop: $("#credits-title").offset().top
    }, 1000);
});
