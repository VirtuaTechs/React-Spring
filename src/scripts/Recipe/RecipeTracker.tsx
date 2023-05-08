import RecipeManager from "../Managers/RecipeManager";
import StepsManager from "../Managers/StepsManager";
import Step from "../Steps/Step";
import Recipe from "./Recipe";

class RecipeTracker{
	private selectedRecipe: Recipe;
	private stepsList: Step[];

	constructor(recipe: Recipe) {
		this.selectedRecipe = recipe;
		this.stepsList = [];
	}

	initRecipe() {
		this.stepsList = StepsManager.getInstance().initRecipe(this.selectedRecipe);
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
}

export default RecipeTracker;