import Interactable from "../Interactables/Interactable";

enum stage{
	//Define multiple stages
	start
}

class Step{

	private originalItem: Interactable | undefined;
	private resultItem: Interactable | undefined;
	private preReq: Interactable | undefined;
	private isTerminating: boolean | undefined;
	private isComplete: boolean | undefined;
	private currentStage: stage | undefined;
	private isOptional: boolean | undefined;
	private id: string | undefined;
	private type: string | undefined
	private skipsID: Step | undefined;
	private finalItem: Interactable | undefined;

	constructor() {
		this.currentStage = stage.start;
		this.isComplete = false;
	}	

	onInit(originalItem: Interactable, resultItem: Interactable, preReq: Interactable, isTerminating: boolean = false, isOptional: boolean ) {

	}

	onRemove() {

	}

	onProgress() {

	}

}

export default Step;