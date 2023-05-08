import Ingredients from "./Ingredients";

enum type {
	Salt,
	BlackPepper,
	WhitePepper,
	Paprika	
}

class Condiments extends Ingredients{
	constructor() {
		super();
	}
}

export default Condiments;