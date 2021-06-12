const { Pool } = require('pg');

const PG_URI =
	'postgres://kzbdltnl:ydcDZ7JCqaPLnUPK2BmqqpEzhwjUZaGL@batyr.db.elephantsql.com/kzbdltnl';

const pool = new Pool({
	connectionString: PG_URI,
});

module.exports = {
	query: (text, params, callback) => {
		console.log('executed query', text);
		return pool.query(text, params, callback);
	},
};
