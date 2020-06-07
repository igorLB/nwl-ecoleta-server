import knex from "knex";
require("dotenv").config();

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME,
    },
    useNullAsDefault: true,
});

export default connection;
