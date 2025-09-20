import Cat from "../models/Cat.js";

export default {
   getAll() {
      return Cat.find();
   },
   create(catData) {
      const cat = new Cat(catData);

      return cat.save();
   },
};
