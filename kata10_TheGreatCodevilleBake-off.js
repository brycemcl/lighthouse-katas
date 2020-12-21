const chooseRecipe = function (bakeryA, bakeryB, recipes) {
	for (recipe of recipes) {
		if (canRecipeBeMade(bakeryA, bakeryB, recipe)) {
			return recipe.name
		}
	}
	return false
}

const canRecipeBeMade = (bakeryA, bakeryB, recipe) => {
	for (let index = 0; index < recipe.ingredients.length; index++) {
		let ingredients = recipe.ingredients
		if (doesStringExistInArray(bakeryA, ingredients[index])) {
			ingredients.splice(index, 1)
			for (let index = 0; index < ingredients.length; index++) {
				if (doesStringExistInArray(bakeryB, ingredients[index])) {
					return true
				}
			}
		}
	}
	for (let index = 0; index < recipe.ingredients.length; index++) {
		let ingredients = recipe.ingredients
		if (doesStringExistInArray(bakeryA, ingredients[index])) {
			ingredients.splice(index, 1)
			for (let index = 0; index < ingredients.length; index++) {
				if (doesStringExistInArray(bakeryA, ingredients[index])) {
					return true
				}
			}
		}
	}
	return false
}

const doesStringExistInArray = (array, stringToMatch) => {
	for (string of array) {
		if (string === stringToMatch) {
			return true
		}
	}
	return false
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard']
let bakeryB = ['milk', 'butter', 'cream cheese']
let recipes = [
	{
		name: 'Coconut Sponge Cake',
		ingredients: ['coconut', 'cake base'],
	},
	{
		name: 'Persian Cheesecake',
		ingredients: ['saffron', 'cream cheese'],
	},
	{
		name: 'Custard Surprise',
		ingredients: ['custard', 'ground beef'],
	},
]

console.log(chooseRecipe(bakeryA, bakeryB, recipes))

bakeryA = ['potatoes', 'bay leaf', 'raisins']
bakeryB = ['red bean', 'dijon mustard', 'apples']
recipes = [
	{
		name: 'Potato Ganache',
		ingredients: ['potatoes', 'chocolate'],
	},
	{
		name: 'Sweet Fish',
		ingredients: ['anchovies', 'honey'],
	},
	{
		name: "Nima's Famous Dijon Raisins",
		ingredients: ['dijon mustard', 'raisins'],
	},
]

console.log(chooseRecipe(bakeryA, bakeryB, recipes))
