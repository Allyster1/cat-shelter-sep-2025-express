import fs from "fs/promises";

const dbSerialized = await fs.readFile("./src/db.json", { encoding: "utf-8" });
let db = JSON.parse(dbSerialized);

export default class Breed {
   constructor(breed) {
      this.breed = breed;
      this._id = uuid();
   }

   static find() {
      return db.breed.slice();
   }

   get id() {
      return this._id;
   }

   async save() {
      db.breed.push(this);

      const dbSerialized = JSON.stringify(db, null, 3);

      await fs.writeFile("./src/db.json", dbSerialized);

      return this;
   }
}
