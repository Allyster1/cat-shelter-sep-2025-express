import Cat from "../models/Cat.js";

export default {
   getAll() {
      return Cat.find();
   },
   create(catData) {
      console.log(catData);
   },
};
