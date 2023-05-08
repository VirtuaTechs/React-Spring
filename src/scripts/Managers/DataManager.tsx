import DataFactory from '../Factories/DataFactory';
import RecipeFactory from '../Factories/RecipeFactory';
import RecipeRepository from '../Data/RecipeRepository';
import Recipe from '../Recipe/Recipe'
import { EnumType } from 'typescript';

enum storage {
	local,
	remote
}

class DataManager{

	private static instance: DataManager;

	private constructor() {
	}

	static getInstance() {
		if(!DataManager.instance) DataManager.instance = new DataManager();
		return DataManager.instance;
	}

	async fetchData(path: string, method: storage) {

		let recipe = new Recipe();
		if(method === storage.local)
			recipe = await DataFactory.getInstance().fetchDatafromLocal(path);
		else if(method === storage.remote)
			recipe = await DataFactory.getInstance().fetchDatafromRemote(path, '');

		RecipeRepository.getInstance().addRecipe(recipe);
	}

	async storeData(data: Recipe) {
		//Validate recipe
		RecipeRepository.getInstance().addRecipe(data);
	}

	getRecipe(recipeID: string) {
		return RecipeRepository.getInstance().getRecipeByID(recipeID);
	}

	getAllRecipes() {
		return RecipeRepository.getInstance().getAllRecipes();
	}
}

export default DataManager;