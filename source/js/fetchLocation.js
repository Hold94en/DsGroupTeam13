function getLocations(successClb) {	// jshint ignore:line
	'use strict';
	var obj = {
		locations:[
			{
				id: "1",
				name: "Ristorante Nabucco",
				address: {
					state: "Italia",
					city: "Milano",
					street: "Via Fiori Chiari",
					strnum: "10",
					postcode: "20121"
				},
				gallery: [
					"../img/restaurants/restaurant1/chairs-2179044.jpg",
					"../img/restaurants/restaurant1/pexels-photo-225448.jpeg",
				],
				description: "",
				rewiews: [
					{
						title: "Titolo recensione 1",
						text: "Lorem ipsum"
					},
					{
						title: "Titolo recensione 2",
						text: "Lorem ipsum"
					}
				],
				rating: 5
			},
			{
				id: "2",
				name: "La Taverna Gourmet",
				address: {
					state: "Italia",
					city: "Milano",
					street: "Via Andrea Maffei",
					strnum: "12",
					postcode: "20135"
				},
				gallery: [
					"../img/restaurants/restaurant1/chairs-2179044.jpg",
					"../img/restaurants/restaurant1/pexels-photo-225448.jpeg",
				],
				description: "",
				rewiews: [
					{
						title: "Titolo recensione 3",
						text: "Lorem ipsum"
					}
				],
				rating: 5
			},
			{
				id: "3",
				name: "Il Faro Di Marco D'Oggiono",
				address: {
					state: "Italia",
					city: "Milano",
					street: "Via Marco D'Oggiono",
					strnum: "999",
					postcode: "20123"
				},
				gallery: [
					"../img/restaurants/restaurant1/chairs-2179044.jpg",
					"../img/restaurants/restaurant1/pexels-photo-225448.jpeg",
				],
				description: "",
				rewiews: [
					{
						title: "Titolo recensione 4",
						text: "Lorem ipsum"
					},
					{
						title: "Titolo recensione 5",
						text: "Lorem ipsum"
					}
				],
				rating: 5
			}
		]
	};
	
	successClb(obj.locations);
}

function getSingularLocation(id, successClb) {
	'use strict';
	//idealy i would have set up a different server request or used an existing function
	getLocations(function(locs) {	//ask for data and send a function to run when data arrive
		successClb(locs[id]);		//return the data to the index.js page
	});
}

function stringifyObject(obj, sep) {
	'use strict';
	var res = '';
	for(var o in obj) {
		if(o) {
			res += obj[o] + sep;
		}
	}
	return res.slice(0, -sep.length);
}