import DataManager from "../Managers/DataManager";

class RecipeFactory {
	constructor() {

	}

	static getRecipe(recipeID: string) {
		return DataManager.getRecipe(recipeID);
	}
}

export default RecipeFactory;