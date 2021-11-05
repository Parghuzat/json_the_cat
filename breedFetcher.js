const request = require('request');
const breed = process.argv[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
request (url, (error, response, body) => {
	if (error !== undefined){
		console.log()
	}
	else if (body == '[]') {
		console.log("No result found!");
	}
	else {
	const data = JSON.parse(body);
	console.log(data[0].description);
	}
})

