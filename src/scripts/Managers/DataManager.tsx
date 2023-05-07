import DataFactory from '../Factories/DataFactory';
import RecipeFactory from '../Factories/RecipeFactory';
import RecipeRepository from '../Data/RecipeRepository';
import Recipe from '../Recipe/Recipe'
import { Any } from '@react-spring/web';

class DataManager{
	private recipeRepository: RecipeRepository;

	constructor(recipeRepository: RecipeRepository) {
		this.recipeRepository = recipeRepository;
	}

	async initData() {
		const data = await DataFactory.initData();
		this.recipeRepository.storeData(data);
	}

	async storeData(data: Recipe) {
		await DataFactory.storeData(data);
	}

	getRecipe(recipeID: string) {
		return RecipeFactory.getRecipe(recipeID);
	}

	getAllRecipes() {
		return this.recipeRepository.getAllRecipes();
	}
}

export default DataManager;