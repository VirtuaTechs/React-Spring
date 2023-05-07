import RecipeCreator from "../Recipe/RecipeCreator";
import RecipeFactory from "../Factories/RecipeFactory";
import UserInput from "../Utils/UserInput";
import DataManager from "./DataManager";
import Recipe from "../Recipe/Recipe";
import Authenticator from "../Utils/Authenticator";

class RecipeManager{

	private static selectedRecipe: Recipe;

	constructor() {
		RecipeManager.selectedRecipe = !null;
	}

	static addRecipefromUser() {
		const rawData = UserInput.getRecipeDataFromUser();
		
		//Validate data from user
		const recipe = RecipeCreator.createRecipe(rawData);

		//Validate Recipe
		DataManager.storeData(recipe);
	}

	static addRecipefromWebScraper() {
		//Add option of using a web scraper to get recipe from any webpage
	}

	static authenticateRecipe(recipe:Recipe) {
		return 
	}

	static selectRecipe( recipeID: string) {
		const recipe = RecipeFactory.getRecipe(recipeID);
		if(!Authenticator.authenticate(recipe))
			return null; //Authenciation failed

		RecipeManager.selectedRecipe = recipe;
	}

}

export default RecipeManager;