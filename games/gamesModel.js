const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  remove
};

async function insert(game) {
  const [id] = await db("games").insert(game);

  return db("games")
    .where({ id })
    .first();
}

function remove(id) {
  return db("games")
    .where("id", Number(id))
    .del();
}
