import { sql } from "./db.js";

// sql`drop table if exists videos;`.then(() => {
//   console.log("Dropped!");
// });
sql`
         CREATE TABLE IF NOT EXISTS videos (
          id          TEXT PRIMARY KEY,
          title       TEXT,
          description TEXT,
          duration    INTEGER
        );`.then(() => {
  console.log("Created!");
});

//Terminal: node create-table.js
