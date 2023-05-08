import Interactable from "../Interactables/Interactable";
import Step from "../Steps/Step";

class Recipe{

	private itemsRequired: Interactable[];
	private steps: Step[];

	constructor() {
		this.itemsRequired = [];
		this.steps = [];
	}
}

export default Recipe;