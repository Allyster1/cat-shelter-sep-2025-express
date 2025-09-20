import Cat from "../models/Cat.js";

export default {
   getAll() {
      return Cat.find();
   },
   create(catData) {
      // Todo create cat
      console.log(catData);
   },
};
