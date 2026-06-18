require("dotenv").config();

const pgm = require("node-pg-migrate");

const databaseUrl = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

console.log("DB URL =", databaseUrl);

pgm({
  databaseUrl,
  dir: "./migrations",
  direction: "up",
  migrationsTable: "pgmigrations",
})
  .then(() => {
    console.log("✅ Migration OK");
  })
  .catch((err) => {
    console.error("❌ Migration ERROR:", err);
    process.exit(1);
  });