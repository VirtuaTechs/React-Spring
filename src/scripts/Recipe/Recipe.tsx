import Interactable from "../Interactables/Interactable";
import Step from "../Steps/Step";

/**
 * Steps for a recipe
 * 
 * This class stores all the steps and items for a particular recipe
 * 
 */

class Recipe{

	private itemsRequired: Interactable[];
	private steps: Step[];

	constructor() {
		this.itemsRequired = [];
		this.steps = [];
	}
}

export default Recipe;