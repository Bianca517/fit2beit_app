const recipes = {
  "Paste cu sos de creveti": {
    id: 1,
    name: "Spaghetti With Shrimp Sauce",
    image: require("../images/menus/mealPlan0/lunch.jpg"),
    duration: "30 mins",
    serving: 1,
    ingredients: [
      {
        id: 1,
        icon: require("../images/icons/pasta.png"),
        description: "Spaghetti pasta",
        quantity: "100g",
      },
      {
        id: 2,
        icon: require("../images/icons/oil.png"),
        description: "Olive Oil",
        quantity: "2 tbsp",
      },
      {
        id: 3,
        icon: require("../images/icons/shrimp.png"),
        description: "Fresh Shrimp",
        quantity: "100g",
      },
      {
        id: 4,
        icon: require("../images/icons/tomato.png"),
        description: "Campari tomatoes",
        quantity: "100g",
      },
      {
        id: 5,
        icon: require("../images/icons/salt.png"),
        description: "Salt",
        quantity: "¾ tbsp",
      },
      {
        id: 6,
        icon: require("../images/icons/pepper.png"),
        description: "Black Pepper",
        quantity: "¼ tbsp",
      },
    ],
  },
  "Pui malaesian cu satay": {
    id: 2,
    name: "Malaysian Chicken Satay",
    image: require("../images/menus/mealPlan1/lunch.jpg"),
    duration: "50 mins",
    serving: 10,
    ingredients: [
      {
        id: 1,
        icon: require("../images/icons/chicken.png"),
        description: "Boneless Chicken Thighs",
        quantity: "1kg",
      },
      {
        id: 2,
        icon: require("../images/icons/lemongrass.png"),
        description: "Lemongrass stalk",
        quantity: "1 stalk",
      },
      {
        id: 3,
        icon: require("../images/icons/onion.png"),
        description: "Large Onion",
        quantity: "1",
      },
      {
        id: 4,
        icon: require("../images/icons/garlic.png"),
        description: "Garlic cloves",
        quantity: "5",
      },
      {
        id: 5,
        icon: require("../images/icons/coriander.png"),
        description: "Coriander",
        quantity: "1 tsp",
      },
    ],
  },
};

export default recipes;
