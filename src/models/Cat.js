import BaseModel from "./BaseModel.js";

export default class Cat extends BaseModel {
  constructor(data) {
    super("cats", data);
  }

  static find() {
    return BaseModel.find("cats");
  }

  static findById(id) {
    return BaseModel.findById("cats", id);
  }

  static async findByIdAndUpdate(id, updateData) {
    return await BaseModel.findByIdAndUpdate("cats", id, updateData);
  }

  static async findByIdAndDelete(id) {
    return await BaseModel.findByIdAndDelete("cats", id);
  }
}
