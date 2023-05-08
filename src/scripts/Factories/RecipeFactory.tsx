import DataManager from "../Managers/DataManager";

class RecipeFactory {
	private static instance: RecipeFactory; 

	private constructor() {

	}

	static getInstance() {
		if(!RecipeFactory.instance) RecipeFactory.instance = new RecipeFactory();
		return RecipeFactory.instance;
	}

	getRecipe(recipeID: string) {
		return DataManager.getInstance().getRecipe(recipeID);
	}
}

export default RecipeFactory;