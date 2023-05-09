import RecipeRepository from "../Data/RecipeRepository";
import DataSource from "../DataSources/DataSource";
import Recipe from "../Recipe/Recipe";

/**
 * Factory to create recipes
 * 
 * This class returns recipes either from the database or by creating them from rawData
 * 
 */

class RecipeFactory {
	private static instance: RecipeFactory;
	private dataSources: DataSource[];

	private constructor() {
		this.dataSources = [];

	}

	initDataSources(config: string) {
		//Initialize data sources from config file
	}

	async fetchData(path: string) {

		this.dataSources.map((source) => {
			const dataStream = source.fetchData(path);
			const recipe = this.createRecipe(dataStream);

			RecipeRepository.getInstance().addRecipe(recipe);
		})
	}

	async storeData(data: Recipe) {
		//Validate recipe
		RecipeRepository.getInstance().addRecipe(data);
	}

	getRecipeByID(recipeID: string) {
		return RecipeRepository.getInstance().getRecipeByID(recipeID);
	}

	getAllRecipes() {
		return RecipeRepository.getInstance().getAllRecipes();
	}

	static getInstance() {
		if (!RecipeFactory.instance) RecipeFactory.instance = new RecipeFactory();
		return RecipeFactory.instance;
	}

	createRecipe(rawdata: string) {
		const recipe = new Recipe();
		return recipe;
	}
}

export default RecipeFactory;