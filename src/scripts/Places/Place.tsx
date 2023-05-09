import Interactable from "../Interactables/Interactable";

/**
 * Concept for places
 * 
 * User may need to go to specific places to get particular items
 * 
 */

class Place{

	private itemsAvailable: Interactable[];

	constructor(itemsList: Interactable[]) {
		this.itemsAvailable = itemsList;
	}

	checkItemIsAvailable(item: Interactable) {
		//Check if item exists in the available items list
	}

	getItem(item: Interactable) {
		//Return item and decrement available items number
	}
}

export default Place;