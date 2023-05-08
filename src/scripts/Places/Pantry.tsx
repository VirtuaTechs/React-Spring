import Interactable from "../Interactables/Interactable";
import Place from "./Place";

class Pantry extends Place{
	constructor(itemsList: Interactable[]) {
		super(itemsList);
	}
}

export default Pantry;