import { v4 as uuid } from "uuid";
import fs from "fs/promises";

const dbSerialized = await fs.readFile("./src/db.json", { encoding: "utf-8" });
let db = JSON.parse(dbSerialized);

export default class Breed {
   constructor(breedData) {
      this.breed = breedData.breed;
      this._id = uuid();
   }

   static find() {
      return db.breeds.slice();
   }

   get id() {
      return this._id;
   }

   async save() {
      db.breeds.push(this);
      const dbSerialized = JSON.stringify(db, null, 3);
      await fs.writeFile("./src/db.json", dbSerialized);
      return this;
   }
}
