const { Pool } = require("pg");

const {
  DB_USERNAME,
  DB_HOST,
  DB_NAME,
  DB_PWD,
  DB_PORT,
  DB_MAX_CONNECTIONS
} = process.env;

const url =
  "postgres://ffwqzmdr:SP10ayxz6FDRxIXdsEIC2KZGEK0qnHcP@raja.db.elephantsql.com:5432/ffwqzmdr";

const uriLocal = "postgres://dev:ilovetesting@localhost/drewslist";
const pool = new Pool({
  connectionString: url
});

module.exports = pool;
