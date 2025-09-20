import Cat from "../models/Cat.js";

export default {
   getAll() {
      return Cat.find();
   },
   create(catData) {
      // Todo create cat

      const cat = new Cat(catData);

      return cat.save();
   },
};
