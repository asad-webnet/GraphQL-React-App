const Animal = {
  category: (parent, args, {categories}) => {
    let category = categories.find (
      category => category.id === parent.category
    );
    return category;
  },
};

module.exports = Animal;
