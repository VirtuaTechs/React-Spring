import Interactable from "../Interactables/Interactable";
import Place from "./Place";

class Cabinet extends Place{
	constructor(itemsList: Interactable[]) {
		super(itemsList);
	}
}

export default Cabinet;