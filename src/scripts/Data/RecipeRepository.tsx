import Recipe from '../Recipe/Recipe'

class RecipeRepository{
	private static recipeList: Recipe[];

	constructor() {
		RecipeRepository.recipeList = [];
	}

	static addRecipe(recipe: Recipe) {
		RecipeRepository.recipeList.push(recipe);
	}

	static removeRecipe(recipe:Recipe) {
		//Remove particular recipe from recipeList
	}

	static getRecipeByID(ID: string) {
		//Return recipe after checking for ID and returning the particular recipe
		const recipe = new Recipe();
		return recipe;
	}

	static getAllRecipes() {
		return RecipeRepository.recipeList;
	}

}

export default RecipeRepository;