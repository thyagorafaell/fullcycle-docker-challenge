var express = require('express');
var getUsers = require('./getUsers');

module.exports = () => {
	const app = express();

	app
		.get('/', async(_req, res) => {
			res.writeHead(200, {
				'Content-Type': 'text/plain'
			});

			res.write('<h1>Full Cycle Rocks!</h1>' + await getUsers());
			res.end();
		})
		.listen(9000, () => console.log('Running on 9000'));
};