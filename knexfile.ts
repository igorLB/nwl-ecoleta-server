import path from "path";

module.exports = {
    client: "mysql",
    connection: {
        host: "sql10.freemysqlhosting.net",
        user: "sql10346143",
        password: "azvj1JWyVC",
        database: "sql10346143",
    },
    migrations: {
        directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
        directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
    useNullAsDefault: true,
};
