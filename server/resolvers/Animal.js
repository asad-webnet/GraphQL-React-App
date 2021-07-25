const Animal = {
  category: (parent, args, ctx) => {
    let category = categories.find (
      category => category.id === parent.category
    );
    return category;
  },
};

module.exports = Animal;
