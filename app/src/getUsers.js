var db = require('./database');

const getUserFromDataBase = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM people', function(error, results) {
			if (error) {
				console.error(error);
				reject(error);
			}

			resolve(results);
		});
	})
}

module.exports = async() => {
	let content = '';

	try {
		const people = await getUserFromDataBase();

		content = people
			.map(({ name }) => `<li>${name}</li>`)
			.join('');
	} catch(error) {
		content = `<li>Ocorreu um erro ao buscar os usuários: ${error}</li>`;
	}

	return `<ul>${content}</ul>`;
};