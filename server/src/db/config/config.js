module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "test_todo",
    host: "127.0.0.1",
    dialect: "postgres",
    migrationStorage: "json",
    seederStorage: "json",
  },
  test: {},
  production: {}
}