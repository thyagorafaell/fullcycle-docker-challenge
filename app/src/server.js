var express = require('express');
var getUsers = require('./getUsers');

module.exports = () => {
	const app = express();

	app
		.get('/', async(_req, res) => {
			res.send(`
				<!DOCTYPE html>
				<html lang="pt-br">
				<head>
					<meta charset="UTF-8">
					<meta http-equiv="X-UA-Compatible" content="IE=edge">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>Full Cycle Rocks!</title>
				</head>
				<body>
					<h1>Full Cycle Rocks!</h1>
					${await getUsers()}
				</body>
				</html>
			`);

			res.end();
		})
		.listen(9000, () => console.log('Running on 9000'));
};