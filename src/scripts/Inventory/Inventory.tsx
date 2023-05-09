import Interactable from "../Interactables/Interactable";

/**
 * Handling user inventory
 * 
 * A class that defined all objects that user has picked up and its operations
 * 
 */

class Inventory {
	private itemsAvaialble: Interactable[];
	private static instance: Inventory;

	private constructor() {
		this.itemsAvaialble = [];
	}

	static getInstance() {
		if (!Inventory.instance) Inventory.instance = new Inventory();
		return Inventory.instance;
	}


	initItems(items: Interactable[]) {
		this.itemsAvaialble = items;
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