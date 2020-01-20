const pg = require('pg');
const connectionString = process.env.POSTGRES_URL || 'postgres://hoang:1234567@localhost:5432/bearzo';

const client = new pg.Client(connectionString);

const connectPostgres = async () => {
    try {
        await client.connect();
        console.log("Postgres connected...")
        const query = client.query(
          'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
        await query.on('end', () => { client.end(); });
        console.log("created Item table ")
    } catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectPostgres;