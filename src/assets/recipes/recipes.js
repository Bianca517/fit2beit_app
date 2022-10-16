const recipes = {
  "Pasta with shrimp sauce": {
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
    steps:
      "How To Make Spaghetti with Shrimp Marinara...\n\
    1.  In a large skillet, sauté olive oil and garlic for a few minutes over medium heat, until the garlic turns golden brown.  Add red pepper flakes.\n\
    2.  Next, add chopped tomatoes and fresh parsley.  Cover and simmer on low heat for 10 minutes. \n\
    3.  Add the shrimp and cook until the shrimp turns pink, stirring occasionally. Toss in the basil.\n\
    4.  Season with salt and pepper to taste.  Turn off the heat.  Cover and set aside.\n\
    5.  Cook the spaghetti until it is al-dente (tender to the bite).  Drain and toss with the shrimp marinara and serve!\n\
    Simple, easy to make, and delicious tasting! \n\
    …and Buon Appetito!\n",
  },
  "Malaysian chicken": {
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
    steps:
      "How To Make Malaysian Chicken Satay...\n\
    1. To begin, blend all satay spice mix ingredients together in a food processor until it achieves the consistency of a smooth, fine paste. Set 3 tablespoons of the spice mix aside for making the peanut sauce.\n\
    2. Place the rest of the spice mix into a container with the chicken pieces and leave to marinade in the fridge for at least 4 hours, or preferably overnight.\n\
    3. To make the peanut sauce for the satay, add all the ingredients (including the reserved 3 tablespoons of spice paste) to a medium-sized saucepan. Place over a medium heat and bring to boil, stirring every now and then to prevent it sticking to the bottom. Reduce the heat to low and simmer for 5 minutes until the sauce thickens. Set aside.\n\
    4. Soak the skewers in water for 10 minutes. Skewer the chicken pieces onto skewers so that there are 6 pieces per skewer\n\
    5. To cook the skewers, you can use a flat-top griddle plate, a grill preheated to high or a barbecue. Turn the skewers frequently to char each side for around 5 minutes or until the chicken is cooked through.\n\
    6. Serve with the peanut sauce and freshly cut cucumber and red onion\n\
    ...and Buon Appetito!\n",
  },
};

export default recipes;
