import Breed from "../models/Cat.js";

export default {
   getAll() {
      return Breed.find();
   },
   create(catData) {
      const breed = new Breed(catData);

      return breed.save();
   },
};
