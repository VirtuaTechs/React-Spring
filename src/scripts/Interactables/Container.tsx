import Ingredients from "./Ingredients";
import Interactable from "./Interactable";

/**
 * A class to define container
 * 
 * The container is an object that can store multiple objects in it. It can be used to mix, cook, blend etc
 * 
 */

class Container extends Interactable {

	private itemsList: Ingredients[];

	constructor() {
		super();
		this.itemsList = [];
	}

	addItem() {
		//Only ingredients can be mixed together
	}

}

export default Container;