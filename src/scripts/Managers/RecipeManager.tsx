import RecipeFactory from "../Factories/RecipeFactory";
import Recipe from "../Recipe/Recipe";
import Authenticator from "../Utils/Authenticator";
import Step from "../Steps/Step";
import Inventory from "../Inventory/Inventory";

/**
 * Recipe Manager
 * 
 * This class manages recipe operations like getting new recipes, storing them, getting list of recipes etc.
 * 
 */

class RecipeManager {

	private selectedRecipe: Recipe | undefined;
	private static instance: RecipeManager;
	private stepsList: Step[];

	private constructor() {
		this.stepsList = [];
	}

	static getInstance() {
		if (!RecipeManager.instance) RecipeManager.instance = new RecipeManager();
		return RecipeManager.instance;
	}


	addRecipefromUser() {
	}

	addRecipefromWebScraper() {
		//Add option of using a web scraper to get recipe from any webpage
	}

	authenticateRecipe(recipe: Recipe) {
		return
	}

	selectRecipe(recipeID: string) {
		const recipe = RecipeFactory.getInstance().getRecipeByID(recipeID);
		if (!Authenticator.authenticate(recipe))
			return null; //Authenciation failed

		this.selectedRecipe = recipe;
	}

	initRecipe() {
		//Initialize recipe
		//Inventory.getInstance().initItems();
	}

	checkSteps(completedStep: Step) {
		//Add logic to align next steps when one step has been completed		
	}

	checkStepCompletion() {
		//Add logic to handle step completion
		this.checkRecipeComplete();
	}

	checkRecipeComplete() {
		//After each step is complete, there should be a check if recipe is complete
	}

	addStep(step: Step) {
		//Add validation
		//Add step to list
	}

	removeStep(step: Step) {
		//Remove a step from the list
	}

}

export default RecipeManager;