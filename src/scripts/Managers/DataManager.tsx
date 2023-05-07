import DataFactory from '../Factories/DataFactory';
import RecipeFactory from '../Factories/RecipeFactory';
import RecipeRepository from '../Data/RecipeRepository';
import Recipe from '../Recipe/Recipe'
import { Any } from '@react-spring/web';
import { EnumType } from 'typescript';

enum storage {
	local,
	remote
}

class DataManager{

	constructor() {
	}

	static async fetchData(path: string, method: storage) {

		let recipe = new Recipe();
		if(method === storage.local)
			recipe = await DataFactory.fetchDatafromLocal(path);
		else if(method === storage.remote)
			recipe = await DataFactory.fetchDatafromRemote(path, '');

		RecipeRepository.addRecipe(recipe);
	}

	static async storeData(data: Recipe) {
		//Validate recipe
		RecipeRepository.addRecipe(data);
	}

	getRecipe(recipeID: string) {
		return RecipeFactory.getRecipe(recipeID);
	}

	getAllRecipes() {
		return RecipeRepository.getAllRecipes();
	}
}

export default DataManager;