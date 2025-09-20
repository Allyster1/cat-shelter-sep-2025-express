import BaseModel from "./BaseModel.js";

export default class Breed extends BaseModel {
  constructor(data) {
    super("breeds", data);
  }

  static find() {
    return BaseModel.find("breeds");
  }

  static findById(id) {
    return BaseModel.findById("breeds", id);
  }

  static async findByIdAndUpdate(id, updateData) {
    return await BaseModel.findByIdAndUpdate("breeds", id, updateData);
  }

  static async findByIdAndDelete(id) {
    return await BaseModel.findByIdAndDelete("breeds", id);
  }
}
