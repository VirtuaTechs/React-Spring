import Interactable from "../Interactables/Interactable";
import Place from "../Places/Place";
import Step from "./Step";

class Fetch extends Step{

	private item: Interactable;
	private place: Place;

	constructor(place: Place, item: Interactable) {
		super();
		this.item = item;
		this.place = place;
	}
}

export default Fetch;