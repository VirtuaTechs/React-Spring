import Recipe from '../Recipe/Recipe'

class RecipeRepository{
	private recipeList: Recipe[];
	private static instance: RecipeRepository;

	private constructor() {
		this.recipeList = [];
	}

	static getInstance() {
		if(!RecipeRepository.instance) RecipeRepository.instance = new RecipeRepository();
		return RecipeRepository.instance;
	}

	addRecipe(recipe: Recipe) {
		this.recipeList.push(recipe);
	}

	removeRecipe(recipe:Recipe) {
		//Remove particular recipe from recipeList
	}

	getRecipeByID(ID: string) {
		//Return recipe after checking for ID and returning the particular recipe
		const recipe = new Recipe();
		return recipe;
	}

	getAllRecipes() {
		return this.recipeList;
	}

}

export default RecipeRepository;