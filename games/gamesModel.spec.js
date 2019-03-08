const request = require("supertest");

const games = require("./gamesModel.js");

describe("gameModel.js", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
