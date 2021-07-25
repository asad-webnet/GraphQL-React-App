const   Query = {
    mainCards: () => mainCards,
    animals: (parent,args,{animals}) => animals,
    animal: (parent, args, {animals}) => {
      let data = animals.find (animal => animal.slug === args.slug);

      return data;
    },
    categories: (parent,args,{categories}) => categories,
    category: (parent, args, {categories}) => {
      let category = categories.find (category => category.slug === args.slug);

      return category;
    },
  }

  module.exports = Query;