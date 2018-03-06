$(function() {
	getLocations(function(ristoranti) {		//Success
		console.log(ristoranti);
	}, function() {							//Error
		console.log('Qualcosa è andato storto');
	});
});