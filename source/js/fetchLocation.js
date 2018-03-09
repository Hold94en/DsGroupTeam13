//jshint esversion: 6

function getLocations(successClb, errorClb) {
	var obj = {
		locations:[
			{
				id: "1",
				name: "Ristorante 1",
				address: {
					state: "Italia",
					city: "Milano",
					street: "via non so",
					strnum: "123",
					postcode: "09887"
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
				name: "Ristorante 2",
				address: {
					state: "Italia",
					city: "Milano",
					street: "Via Roma",
					strnum: "11",
					postcode: "000000"
				},
				gallery: [
					"../img/",
					"../img/",
					"../img/"
				],
				description: "",
				rewiews: [
					{
						title: "Titolo recensione 3",
						text: "Lorem ipsum"
					}
				],
				rating: 3
			},
			{
				id: "3",
				name: "Ristorante 3",
				address: {
					state: "Italia",
					city: "Torino",
					street: "Via ###",
					strnum: "999",
					postcode: "111111"
				},
				gallery: [
					"../img/",
					"../img/",
					"../img/"
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
				rating: 1
			}
		]
	};
	
	successClb(obj.locations);
}

function getSingularLocation(id, successClb, errorClb) {
	//idealy i would have set up a different server request or used an existing function
	getLocations(function(locs) {	//ask for data and send a function to run when data arrive
		successClb(locs[id]);		//return the data to the index.js page
	}, errorClb);
}

function stringifyObject(obj, sep = ' ') {
	var res = '';
	for(var o in obj) {
		if(o) {
			res += obj[o] + sep;
		}
	}
	return res.slice(0, -sep.length);
}