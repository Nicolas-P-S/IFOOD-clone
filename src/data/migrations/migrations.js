export async function up(knex){
    return knex.schema.createTable("usuarios", table => {
        table.increments("id").primary()
        table.string("nome").notNullable()
        table.string("senha").notNullable().unique()
        table.string("email").notNullable()
    })
}

export async function down(knex){
    return knex.schema.dropTable("usuarios")
}