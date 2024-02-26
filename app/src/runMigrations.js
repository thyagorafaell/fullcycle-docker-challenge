var randomName = require('node-random-name');
var { v4 } = require('uuid');
var db = require('./database');

const createPeopleTable = `
	CREATE TABLE IF NOT EXISTS people (
		id VARCHAR(36) PRIMARY_KEY NOT NULL,
		name VARCHAR(255) NOT NULL
	);
`;

module.exports = () => {
	db.query(createPeopleTable, (error, results) => {
		console.log(error, results)
		if (!error) {
			db.query(`
				INSERT INTO people (id, name)
				VALUES("${v4()}", "${randomName()}")
			`);

			db.query(`
				INSERT INTO people (id, name)
				VALUES("${v4()}", "${randomName()}")
			`);

			db.query(`
				INSERT INTO people (id, name)
				VALUES("${v4()}", "${randomName()}")
			`);
		}
	});
};