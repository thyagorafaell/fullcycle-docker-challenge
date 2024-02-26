var db = require('./database');

const getUserFromDataBase = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM PEOPLE', function(error, results) {
			if (error) {
				reject(err);
			}

			resolve(results);
		});
	})
}

module.exports = async() => {
	let content = '';

	try {
		content = await getUserFromDataBase()
			.map(({ name }) => `<li>${name}</li>`)
			.join('');
	} catch(error) {
		content = `<li>Ocorreu um erro ao buscar os usuários: ${error}</li>`;
	}

	return `<ul>${content}</ul>`;
};