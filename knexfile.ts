import path from "path";
require("dotenv").config();

module.exports = {
    client: "mysql",
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME,
    },
    migrations: {
        directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
        directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
    useNullAsDefault: true,
};
