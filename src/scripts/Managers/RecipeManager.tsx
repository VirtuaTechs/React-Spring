import RecipeCreator from "../Recipe/RecipeCreator";
import RecipeFactory from "../Factories/RecipeFactory";
import UserInput from "../Utils/UserInput";
import DataManager from "./DataManager";

class RecipeManager{
	private recipeCreator: RecipeCreator;
	private userInput: UserInput;

	constructor() {
		this.recipeCreator = new RecipeCreator();
		this.userInput = new UserInput();
	}

	addRecipefromUser() {
		const rawData = this.userInput.getRecipeDataFromUser();
		const recipe = RecipeCreator.createRecipe(rawData);

		//validate Recipe
		DataManager.storeData(recipe);
	}

}