//jshint esversion: 6

var getLocations = function(successClb, errorClb) {
	const obj = {
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
					"../img/",
					"../img/",
					"../img/"
				],
				description: "",
				rewiews: [
					"Lorem ipsum",
					"Lorem ipsum"
				]
			}
		]
	};

	successClb(obj.locations);
};