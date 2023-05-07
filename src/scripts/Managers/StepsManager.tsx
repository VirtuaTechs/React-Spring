import Recipe from "../Recipe/Recipe";
import Step from "../Steps/Step";

class StepsManager {

	private static Step: Step[];
	constructor() {
		StepsManager.Step = [];
	}

	static initRecipe(recipe: Recipe) {
		//Create appropriate Step from the recipe

	}

	addStep(step: Step) {
		//Add validation
		//Add step to list
	}

	removeStep(step: Step) {
		//Remove a step from the list
	}
}

export default StepsManager;