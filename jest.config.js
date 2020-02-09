module.exports = {
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testURL: "http://localhost/",
  transform: {
    "^.+\\.svelte$": "svelte-jester",
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "js", "svelte"]
};
