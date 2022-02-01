exports.up = async (knex) => {
  await knex.schema
    .createTable("roles", (roles) => {
      roles.increments("role_id")
      roles.string("role_name", 128).notNullable()
    })
    .createTable("users", (users) => {
      users.increments("user_id")
      users.string("username", 200).notNullable()
      users.string("password", 200).notNullable()
      users
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("role_id")
        .inTable("roles")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT")
      users.timestamps(false, true)
    })
    .createTable("categories", (cats) => {
      cats.increments("category_id")
      cats.string("category_name", 128).notNullable()
    })
    .createTable("markets", (market) => {
      market.increments("market_id")
      market.string("market_name", 128).notNullable()
    })
    .createTable("items", (items) => {
      items.increments("item_id")
      items.string("item_name", 128).notNullable()
      items.string("description", 256)
      items.integer("price").notNullable()
      items
        .integer("category_id")
        .unsigned()
        .notNullable()
        .references("category_id")
        .inTable("categories")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT")
      items
        .integer("market_id")
        .unsigned()
        .notNullable()
        .references("market_id")
        .inTable("markets")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT")
    })
}
//test
exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("items")
    .dropTableIfExists("categories")
    .dropTableIfExists("roles")
    .dropTableIfExists("markets")
}
