import knex from "knex";
import path from "path";

const connection = knex({
    client: "mysql",
    connection: {
        host: "sql10.freemysqlhosting.net",
        user: "sql10346143",
        password: "azvj1JWyVC",
        database: "sql10346143",
    },
    useNullAsDefault: true,
});

export default connection;
