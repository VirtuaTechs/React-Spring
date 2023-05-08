import Interactable from "../Interactables/Interactable";

class Inventory{
	private itemsAvaialble: Interactable[];

	constructor() {
		this.itemsAvaialble = [];
	}

	getItem(itemID: string) {
		//Get item with specific ID
	}

	getItemByType(type: string) {
		//Get all items of a specific type like cutting tools or containers
	}

	removeItem(itemID: string) {
		//Remove item from inventory one is has been used
	}

	addItem(item: Interactable) {
		//Add item - May have been created as a result of a step
	}
}

export default Inventory;