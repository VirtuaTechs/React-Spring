import Interactable from "../Interactables/Interactable";
import WorldObject from "../Interactables/WorldObjects/WorldObject";
import Step from "./Step";

enum type{
	Cook,
	Blend
	//More possible
}

class Cook extends Step{

	private itemsList: Interactable[];
	private worldObject: WorldObject;
	private type: type;

	constructor(worldObject: WorldObject, type: type, items: Interactable[]) {
		super();
		this.itemsList = items;
		this.worldObject = worldObject;
		this.type = type;
	}

	initStep() {
		//This step involves one or more items and a world object like stove, blender etc
	}
}

export default Cook;