import Recipe from './Recipe'

class RecipeCreator{
	constructor() {

	}

	static createRecipe(data:string) {
		const recipe = new Recipe();
		//Create recipe object from rawData
		return recipe;
	}

}

export default RecipeCreator;