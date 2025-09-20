import { v4 as uuid } from "uuid";
import fs from "fs/promises";

const DB_FILE = "./src/db.json";
let db = JSON.parse(await fs.readFile(DB_FILE, "utf-8"));

export default class BaseModel {
   constructor(data = {}) {
      this._id = uuid();
      Object.assign(this, data);
   }

   //  Static Helper Methods

   static getCollection(collectionName) {
      return db[collectionName] ?? [];
   }

   static async writeToDb() {
      const dbSerialized = JSON.stringify(db, null, 3);
      await fs.writeFile(DB_FILE, dbSerialized);
   }

   //  Instance Methods

   async save(collectionName) {
      db[collectionName].push(this);
      await BaseModel.writeToDb();
      return this;
   }

   get id() {
      return this._id;
   }

   //  Static CRUD methods

   static find(collectionName) {
      return BaseModel.getCollection(collectionName).slice();
   }

   static findById(collectionName, id) {
      return BaseModel.getCollection(collectionName).find((item) => item._id === id);
   }

   static async findByIdAndUpdate(collectionName, id, updateData) {
      const collection = BaseModel.getCollection(collectionName);
      const index = collection.findIndex((item) => item._id === id);

      if (index === -1) return null;

      Object.assign(collection[index], updateData);
      await BaseModel.writeToDb();
      return collection[index];
   }

   static async findByIdAndDelete(collectionName, id) {
      const collection = BaseModel.getCollection(collectionName);
      const index = collection.findIndex((item) => item._id === id);

      if (index === -1) return null;

      const deleted = collection.splice(index, 1)[0];
      await BaseModel.writeToDb();
      return deleted;
   }
}
