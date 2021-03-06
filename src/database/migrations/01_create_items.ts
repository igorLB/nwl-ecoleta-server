import Knex from "knex";

export async function up(knex: Knex) {
    // CRIAR A TABELA
    return knex.schema.createTable("items", (table) => {
        table.increments("id").primary();
        table.string("image").notNullable();
        table.string("title").notNullable();
    });
}

export async function down(knex: Knex) {
    // ESTE METODO DEVE SEMPRE FAZER O CONTRARIO DO QUE O METODO UP FAZ

    return knex.schema.dropSchema("items");
}
