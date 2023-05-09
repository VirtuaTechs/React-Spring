import Ingredients from "./Ingredients";
import Interactable from "./Interactable";

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