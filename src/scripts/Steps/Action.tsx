import Interactable from "../Interactables/Interactable";
import Step from "./Step";

enum type {
	Wash,
	Cut,
	Chop,
	Open
	//More possible
}

class Action extends Step{
	
	//One or more items required - Wash, Open need one, Chop, Cut need 1 item, 1 cutter
	private itemsList: Interactable[];
	private type: type;
	
	constructor(type: type, items: Interactable[]) {
		super();
		this.type = type;
		this.itemsList = items;
	}

	initStep() {
		//Add all items to the items list and use type to generate appropriate actions
	}

	checkCompletion() {

	}

}

export default Action;