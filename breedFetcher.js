const request = require('request');



const fetchBreedDescription = function (breedName, callback) {

	let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
	request (url, (error, response, body) => {
		if (error !== null){
			callback(error, undefined);
		}
		else if (body == '[]') {
			callback(undefined, 'Nothing Found');
		}
		else {
			const data = JSON.parse(body);
			callback(undefined, data[0].description);
		}
	})
}
module.exports = fetchBreedDescription;