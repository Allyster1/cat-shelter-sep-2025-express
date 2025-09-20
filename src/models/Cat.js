import { v4 as uuid } from "uuid";
import fs from "fs/promises";

const dbSerialized = await fs.readFile("./src/db.json", { encoding: "utf-8" });
let db = JSON.parse(dbSerialized);

export default class Cat {
  constructor(data) {
    Object.assign(this, data);
    this._id = uuid();
  }

  static find() {
    return db.cats.slice();
  }

  static findById(id) {
    return db.cats.find((cat) => cat._id === id);
  }

  get id() {
    return this._id;
  }

  async save() {
    db.cats.push(this);

    const dbSerialized = JSON.stringify(db, null, 3);

    await fs.writeFile("./src/db.json", dbSerialized);

    return this;
  }

  static async findByIdAndUpdate(id, updateData) {
    const catIndex = db.cats.findIndex((cat) => cat._id === id);

    if (catIndex === -1) {
      return null;
    }

    Object.assign(db.cats[catIndex], updateData);

    const dbSerialized = JSON.stringify(db, null, 3);
    await fs.writeFile("./src/db.json", dbSerialized);

    return db.cats[catIndex];
  }
}
