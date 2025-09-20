import Cat from "../models/Cat.js";

export default {
  getAll() {
    return Cat.find();
  },
  getById(id) {
    return Cat.findById(id);
  },
  create(catData) {
    const cat = new Cat(catData);

    return cat.save();
  },
  update(id, catData) {
    return Cat.findByIdAndUpdate(id, catData);
  },
};
