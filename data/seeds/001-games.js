exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex("games")
    .truncate()
    .then(function() {
      return knex("games").insert([
        { name: "Kingdom Hearts" },
        { name: "Legend of Zelda" },
        { name: "Mario Party" },
        { name: "Silent Hill" }
      ]);
    });
};
