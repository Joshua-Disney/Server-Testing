const request = require("supertest");

const db = require("../data/dbConfig.js");
const Games = require("./gamesModel.js");

describe("gameModel.js", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("insert", () => {
    afterEach(async () => {
      await db("games").truncate();
    });

    it("should insert the amount of games provided", async () => {
      await Games.insert({ name: "Donkey Kong" });
      await Games.insert({ name: "Star Fox" });

      const games = await db("games");
      expect(games).toHaveLength(2);
    });

    it("should insert the provided game into the database", async () => {
      let game = await Games.insert({ name: "Minecraft" });
      expect(game.name).toBe("Minecraft");

      game = await Games.insert({ name: "Skyrim" });
      expect(game.name).toBe("Skyrim");
    });
  });

  describe("remove", () => {
    afterEach(async () => {
      await db("games").truncate();
    });

    it("should delete the selected game from the database", async () => {
      const game = await Games.insert({ name: "Jak and Daxter" });
      expect(game.name).toBe("Jak and Daxter");
      await Games.remove(game.id);
      expect(game.name).toBeFalsy("Jak and Daxter");
    });
  });
});
