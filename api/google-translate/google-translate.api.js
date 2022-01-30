const axios = require('axios');

const translateFromHebrew = async (qureyObject) => {
	const fetchOptions = {
		method: 'POST',
		url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'accept-encoding': 'application/gzip',
			'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
			'x-rapidapi-key': '2f0a0a1379mshc37c3f5d17f7804p18b801jsn8e8de079beb0'
		},
		data: {q: 'Hello, world!', target: 'es', source: 'en'}
	}
}


const mockQuery = {
	recepieTitle: "Recepie title",
	recepieDescription: "Recepie Description",
	writerName: "Writer name",
	ingridients: {
		ingridientsTitle: "ingridients",
		materials: [
			["garlic", "olive oil"]
		],
	},
	recepieProtocol: {
		protocolTitle: "protocol title",
		tags: [
			["easy", "tasty"]
		],
		protocolOperations: [
			"heat",
			"insert",
			"stir",
		]
	}
}