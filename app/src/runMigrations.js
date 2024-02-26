var randomName = require('node-random-name');
var { v4 } = require('uuid');
var db = require('./database');

const createPeopleTable = `
	CREATE TABLE IF NOT EXISTS people (
		id VARCHAR(36) PRIMARY KEY NOT NULL,
		name VARCHAR(255) NOT NULL
	);
`;

module.exports = () => {
	db.query(createPeopleTable, error => {
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
		} else {
			console.error(error);
		}
	});
};