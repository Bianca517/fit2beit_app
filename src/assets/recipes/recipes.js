const recipes = {
  Ciorba: {
    id: 1,
    name: "Spaghetti With Shrimp Sauce",
    image: require("../images/menus/mealPlan0/lunch.jpg"),
    duration: "30 mins",
    serving: 1,
    ingredients: [
      {
        id: 1,
        //icon: //s.pasta,
        description: "Spaghetti pasta",
        quantity: "100g",
      },
      {
        id: 2,
        //: //s.oil,
        description: "Olive Oil",
        quantity: "2 tbsp",
      },
      {
        id: 3,
        //: //s.shrimp,
        description: "Fresh Shrimp",
        quantity: "100g",
      },
      {
        id: 4,
        //: //s.tomato,
        description: "Campari tomatoes",
        quantity: "100g",
      },
      {
        id: 5,
        //: //s.salt,
        description: "Salt",
        quantity: "¾ tbsp",
      },
      {
        id: 6,
        //: //s.pepper,
        description: "Black Pepper",
        quantity: "¼ tbsp",
      },
    ],
  },
};

export default recipes;
