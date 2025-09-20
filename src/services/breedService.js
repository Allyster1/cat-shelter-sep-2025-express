import Breed from "../models/Breed.js";

export default {
   getAll() {
      return Breed.find();
   },
   async create(breedData) {
      const allBreeds = await Breed.find();
      const exists = allBreeds.some(
         (b) => typeof b.breed === "string" && b.breed.trim().toLowerCase() === breedData.breed.trim().toLowerCase()
      );
      if (exists) {
         return null;
      }
      const breed = new Breed(breedData);
      return breed.save();
   },
};
