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
  search(query) {
    const allCats = Cat.find();

    if (!query || query.trim() === "") {
      return allCats;
    }

    const searchTerm = query.toLowerCase().trim();

    return allCats.filter(
      (cat) =>
        cat.name.toLowerCase().includes(searchTerm) ||
        cat.breed.toLowerCase().includes(searchTerm) ||
        cat.description.toLowerCase().includes(searchTerm)
    );
  },
  delete(id) {
    return Cat.findByIdAndDelete(id);
  },
};
