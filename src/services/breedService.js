import Breed from "../models/Breed.js";

export default {
  getAll() {
    return Breed.find();
  },

  async create(breedData) {
    const allBreeds = Breed.find();
    const exists = allBreeds.some(
      (b) => b.breed.trim().toLowerCase() === breedData.breed.toLowerCase()
    );

    if (exists) {
      return null;
    }

    const breed = new Breed(breedData);
    return await breed.save("breeds");
  },
};
