import RecipeManager from "../Managers/RecipeManager";
import StepsManager from "../Managers/StepsManager";
import Recipe from "./Recipe";


class RecipeTracker{
	private selectedRecipe: Recipe;

	constructor(recipe: Recipe) {
		this.selectedRecipe = recipe;
	}

	initRecipe() {
		StepsManager.initRecipe(this.selectedRecipe);
	}

}

export default RecipeTracker;