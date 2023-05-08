import { Container } from "react-dom";
import Step from "./Step";
import Interactable from "../Interactables/Interactable";


class Mix extends Step{

	private container: Container;
	private itemsList: Interactable[];

	constructor(container: Container, items: Interactable[]) {
		super();

		this.container = container;
		this.itemsList = items;
	}

	initStep() {
		
	}
}

export default Mix;