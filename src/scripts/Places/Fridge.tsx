import Interactable from "../Interactables/Interactable";
import Place from "./Place";

class Fridge extends Place{
	constructor(itemsList: Interactable[]) {
		super(itemsList);
	}
}

export default Fridge;