const Category =  {
    animals: (parent, args, ctx) => {
      console.log (parent);

      return animals.filter (animal => {
        return animal.category === parent.id;
      });
    },
  }

  module.exports = Category;