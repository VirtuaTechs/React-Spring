import Recipe from './Recipe'

class RecipeCreator{
	private static instance:RecipeCreator;

	private constructor() {

	}

	static getInstance() {
		if(!RecipeCreator.instance) RecipeCreator.instance = new RecipeCreator();
		return RecipeCreator.instance;
	}

	createRecipe(data:string) {
		const recipe = new Recipe();
		//Create recipe object from rawData
		return recipe;
	}

}

export default RecipeCreator;