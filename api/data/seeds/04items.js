exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          item_name: "banana",
          description: "yellow fruit",
          price: 1,
          category: 'fruit',
          market_id: 1,
          user_id: 1 
        },
        {
          item_name: "apple",
          description: "round fruit",
          price: 2,
          category: 'fruit',
          market_id: 2,
          user_id: 2
        },
      ])
    })
}
