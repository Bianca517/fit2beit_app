const mealPlans = {
  0: {
    0: ["Yogurt and corn flakes", require("../images/menus/mealPlan0/breakfast.jpg")],
    1: ["Apple", require("../images/menus/mealPlan0/snack1.jpg")],
    2: ["Pasta with shrimp sauce", require("../images/menus/mealPlan0/lunch.jpg")],
    3: ["Yogurt and cashews", require("../images/menus/mealPlan0/snack2.jpg")],
    4: ["Rice with tuna", require("../images/menus/mealPlan0/dinner.jpg")],
  },
  1: {
    0: ["Avocado toast", require("../images/menus/mealPlan1/breakfast.jpg")],
    1: ["Protein Bar", require("../images/menus/mealPlan1/snack1.png")],
    2: ["Malaysian chicken", require("../images/menus/mealPlan1/lunch.jpg")],
    3: ["Banana, peanut butter", require("../images/menus/mealPlan1/snack2.jpg")],
    4: ["Tuna salad", require("../images/menus/mealPlan1/dinner.jpg")],
  },
 
  2: {
    0: ["Chia pudding", require("../images/menus/mealPlan2/breakfast.jpg")],
    1: ["Orange", require("../images/menus/mealPlan2/snack1.jpg")],
    2: ["Pasta with tomatoes", require("../images/menus/mealPlan2/lunch.jpg")],
    3: ["Protein yogurt", require("../images/menus/mealPlan2/snack2.jpg")],
    4: ["Chicken with mushrooms", require("../images/menus/mealPlan2/dinner.jpeg")],
  },
 
  3: {
    0: ["Porridge", require("../images/menus/mealPlan3/breakfast.jpg")],
    1: ["Kiwi", require("../images/menus/mealPlan3/snack1.jpg")],
    2: ["Chicken, sweet potatoes", require("../images/menus/mealPlan3/lunch.jpg")],
    3: ["Cashews", require("../images/menus/mealPlan3/snack2.jpg")],
    4: ["Salmon with peas", require("../images/menus/mealPlan3/dinner.jpg")],
  },
  4: {
    0: ["Eggs and cheese", require("../images/menus/mealPlan4/breakfast.jpg")],
    1: ["Peach", require("../images/menus/mealPlan4/snack1.jpg")],
    2: ["Broccoli soup", require("../images/menus/mealPlan4/lunch.jpg")],
    3: ["Yogurt with blueberries", require("../images/menus/mealPlan4/snack2.jpg")],
    4: ["Salad with cheese, beans", require("../images/menus/mealPlan4/dinner.jpg")],
  },
  5: {
    0: ["Porridge", require("../images/menus/mealPlan5/breakfast.jpg")],
    1: ["Protein Bar", require("../images/menus/mealPlan5/snack1.png")],
    2: ["Flat bread with cheese", require("../images/menus/mealPlan5/lunch.jpg")],
    3: ["Hazelnuts", require("../images/menus/mealPlan5/snack2.jpg")],
    4: ["Chicken salad", require("../images/menus/mealPlan5/dinner.jpg")],
  },
  6: {
    0: ["Protein pancakes", require("../images/menus/mealPlan6/breakfast.jpg")],
    1: ["Nuts", require("../images/menus/mealPlan6/snack1.jpg")],
    2: ["Salmon, sweet potatoes", require("../images/menus/mealPlan6/lunch.jpg")],
    3: ["Protein yogurt", require("../images/menus/mealPlan6/snack2.jpg")],
    4: ["Chicken with peas", require("../images/menus/mealPlan6/dinner.jpg")],
  },
  7: {
    0: ["Boiled eggs", require("../images/menus/mealPlan7/breakfast.jpg")],
    1: ["Popcorn without salt", require("../images/menus/mealPlan7/snack1.jpg")],
    2: ["Flat bread with chicken", require("../images/menus/mealPlan7/lunch.jpg")],
    3: ["Grapes", require("../images/menus/mealPlan7/snack2.jpg")],
    4: ["Cus cus with tuna", require("../images/menus/mealPlan7/dinner.jpg")],
  },
  8: {
    0: ["Yogurt and corn flakes", require("../images/menus/mealPlan0/breakfast.jpg")],
    1: ["Apple", require("../images/menus/mealPlan0/snack1.jpg")],
    2: ["Pasta with shrimp sauce", require("../images/menus/mealPlan0/lunch.jpg")],
    3: ["Yogurt and cashews", require("../images/menus/mealPlan0/snack2.jpg")],
    4: ["Rice with tuna", require("../images/menus/mealPlan0/dinner.jpg")],
  },
  9: {
    0: ["Avocado toast", require("../images/menus/mealPlan1/breakfast.jpg")],
    1: ["Protein Bar", require("../images/menus/mealPlan1/snack1.png")],
    2: ["Malaysian chicken", require("../images/menus/mealPlan1/lunch.jpg")],
    3: ["Banana, peanut butter", require("../images/menus/mealPlan1/snack2.jpg")],
    4: ["Tuna salad", require("../images/menus/mealPlan1/dinner.jpg")],
  },
  10: {
    0: ["Chia pudding", require("../images/menus/mealPlan2/breakfast.jpg")],
    1: ["Orange", require("../images/menus/mealPlan2/snack1.jpg")],
    2: ["Pasta with tomatoes", require("../images/menus/mealPlan2/lunch.jpg")],
    3: ["Protein yogurt", require("../images/menus/mealPlan2/snack2.jpg")],
    4: ["Chicken with mushrooms", require("../images/menus/mealPlan2/dinner.jpeg")],
  },
  11: {
    0: ["Porridge", require("../images/menus/mealPlan3/breakfast.jpg")],
    1: ["Kiwi", require("../images/menus/mealPlan3/snack1.jpg")],
    2: ["Chicken, sweet potatoes", require("../images/menus/mealPlan3/lunch.jpg")],
    3: ["Cashews", require("../images/menus/mealPlan3/snack2.jpg")],
    4: ["Salmon with peas", require("../images/menus/mealPlan3/dinner.jpg")],
  },
  12: {
    0: ["Eggs and cheese", require("../images/menus/mealPlan4/breakfast.jpg")],
    1: ["Peach", require("../images/menus/mealPlan4/snack1.jpg")],
    2: ["Broccoli soup", require("../images/menus/mealPlan4/lunch.jpg")],
    3: ["Yogurt with blueberries", require("../images/menus/mealPlan4/snack2.jpg")],
    4: ["Salad with cheese, beans", require("../images/menus/mealPlan4/dinner.jpg")],
  },
  13: {
    0: ["Porridge", require("../images/menus/mealPlan5/breakfast.jpg")],
    1: ["Protein Bar", require("../images/menus/mealPlan5/snack1.png")],
    2: ["Flat bread with cheese", require("../images/menus/mealPlan5/lunch.jpg")],
    3: ["Hazelnuts", require("../images/menus/mealPlan5/snack2.jpg")],
    4: ["Chicken salad", require("../images/menus/mealPlan5/dinner.jpg")],
  },
  14: {
    0: ["Protein pancakes", require("../images/menus/mealPlan6/breakfast.jpg")],
    1: ["Nuts", require("../images/menus/mealPlan6/snack1.jpg")],
    2: ["Salmon, sweet potatoes", require("../images/menus/mealPlan6/lunch.jpg")],
    3: ["Protein yogurt", require("../images/menus/mealPlan6/snack2.jpg")],
    4: ["Chicken with peas", require("../images/menus/mealPlan6/dinner.jpg")],
  },

  15: {
    0: ["Boiled eggs", require("../images/menus/mealPlan7/breakfast.jpg")],
    1: ["Popcorn without salt", require("../images/menus/mealPlan7/snack1.jpg")],
    2: ["Flat bread with chicken", require("../images/menus/mealPlan7/lunch.jpg")],
    3: ["Grapes", require("../images/menus/mealPlan7/snack2.jpg")],
    4: ["Cus cus with tuna", require("../images/menus/mealPlan7/dinner.jpg")],
  },

};

export default mealPlans;