import fs from "fs/promises";

const dbSerialized = await fs.readFile("./src/db.json", { encoding: "utf-8" });
let db = JSON.parse(dbSerialized);

export default class Cat {
   static find() {
      return db.cats.slice();
   }
}
