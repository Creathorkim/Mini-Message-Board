#! /usr/bin/env node
const { Client } = require("pg");
require("dotenv").config();

const SQL = `
   DROP TABLE IF EXISTS messages;

   CREATE TABLE messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "user" TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   INSERT INTO messages("user", message) VALUES ('Creathorkim', 'Hey, Just checking in on the project timeline. 👀'),
   ('Charles', 'All good here! Just polishing the final touches on the UI.'),
   ('Creathorkim', 'Looks amazing already.'),
   ('Charles', 'Definitely.');

   DELETE FROM messages WHERE id IN (5,6,7);

`;

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    console.log("Seeding");
    await client.connect();
    await client.query(SQL);
    console.log("Done seeding");
  } catch (err) {
    console.log("❌ Error:", err);
  } finally {
    await client.end();
  }
}

main();
