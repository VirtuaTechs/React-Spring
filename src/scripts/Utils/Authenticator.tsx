import Recipe from "../Recipe/Recipe";

class Authenticator{
	constructor() {

	}

	static authenticate( recipe: Recipe) {
		//Add some methods to authenticate if the recipe is genuine and belogs to which category
		return true;
	}
}

export default Authenticator;