var favouriteRecipe = {
    recipeTitle: 'Risotto',
    NumberOfServing: 6,
    ingredients: [
        '500g arborio rice', 
        'half an onion', 
        '2 cloves of garlic', 
        '500ml chicken stock', 
        '2 glasses dry white wine', 
        '100g parmesan cheese', 
        'knob of butter'
    ],
    directions: [
        'heat the onion and garlic', 
        'add the rice', 
        'add the wine to a high heat and wait to evaporate', 
        'add the stock', 
        'add the parmesan and butter'
    ,]
}

var ingredients = favouriteRecipe.ingredients;

for( var index = 0; index < ingredients.length; index++) {
    console.log(ingredients[index]);
}