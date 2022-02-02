exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("markets")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("markets").insert([
        { market_name: "Kenya" },
        { market_name: "Rwanda" },
      ])
    })
}
