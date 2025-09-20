import Cat from "../models/Cat.js";

export default {
   getAll() {
      return Cat.find();
   },

   getById(id) {
      return Cat.findById(id);
   },

   async create(catData) {
      const cat = new Cat(catData);
      return await cat.save("cats");
   },

   async update(id, catData) {
      return await Cat.findByIdAndUpdate(id, catData);
   },

   search(query) {
      if (!query || query.trim() === "") {
         return Cat.find();
      }

      const searchTerm = query.toLowerCase().trim();
      const allCats = Cat.find();

      return allCats.filter(
         (cat) =>
            cat.name.toLowerCase().includes(searchTerm) ||
            cat.breed.toLowerCase().includes(searchTerm) ||
            cat.description.toLowerCase().includes(searchTerm)
      );
   },

   async delete(id) {
      return await Cat.findByIdAndDelete(id);
   },
};
