import Recipe from "../Recipe/Recipe";
import Step from "../Steps/Step";

class StepsManager {

	private stepsList: Step[];
	private static instance: StepsManager;

	private constructor() {
		this.stepsList = [];
	}

	static getInstance() {
		if(!StepsManager.instance) StepsManager.instance  = new StepsManager();
		return StepsManager.instance;
	}

	initRecipe(recipe: Recipe) {
		//Create appropriate Step from the recipe
		return this.stepsList;
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