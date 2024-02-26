var mysql = require('mysql2');

const connection = mysql.createConnection({
	database: process.env.MYSQL_DATABASE,
	host: 'database',
	password: process.env.MYSQL_PASSWORD,
	user: process.env.MYSQL_USER
});

connection.connect();

module.exports = connection;