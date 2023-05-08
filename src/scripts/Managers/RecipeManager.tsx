import RecipeCreator from "../Recipe/RecipeCreator";
import RecipeFactory from "../Factories/RecipeFactory";
import UserInput from "../Utils/UserInput";
import DataManager from "./DataManager";
import Recipe from "../Recipe/Recipe";
import Authenticator from "../Utils/Authenticator";

class RecipeManager{

	private selectedRecipe: Recipe | undefined;
	private static instance: RecipeManager;

	private constructor() {

	}

	static getInstance() {
		if(!RecipeManager.instance) RecipeManager.instance = new RecipeManager();
		return RecipeManager.instance;
	}


	addRecipefromUser() {
		const rawData = UserInput.getRecipeDataFromUser();
		
		//Validate data from user
		const recipe = RecipeCreator.getInstance().createRecipe(rawData);

		//Validate Recipe
		DataManager.getInstance().storeData(recipe);
	}

	addRecipefromWebScraper() {
		//Add option of using a web scraper to get recipe from any webpage
	}

	authenticateRecipe(recipe:Recipe) {
		return 
	}

	selectRecipe( recipeID: string) {
		const recipe = RecipeFactory.getInstance().getRecipe(recipeID);
		if(!Authenticator.authenticate(recipe))
			return null; //Authenciation failed

		this.selectedRecipe = recipe;
	}

}

export default RecipeManager;