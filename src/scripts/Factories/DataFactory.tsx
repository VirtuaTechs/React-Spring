import LocalData  from "../API/LocalData";
import RemoteData from "../API/RemoteData";
import RecipeRepository from "../Data/RecipeRepository";
//import WebScraper from "../API/WebScraper"; -- Can be added later
import RecipeCreator from "../Recipe/RecipeCreator";

class DataFactory{

	private localData: LocalData;
	private remoteData: RemoteData;
	private static instance: DataFactory;
	
	private constructor() {
		this.localData = new LocalData();
		this.remoteData = new RemoteData();
	}

	static getInstance() {
		if(!DataFactory.instance) DataFactory.instance = new DataFactory();
		return DataFactory.instance;
	}

	fetchDatafromLocal(url:string) {
		//Validate path before calling method
		const rawData = this.localData.loadDatafromPath(url);
		
		//Validate rawData before calling recipe creator
		const recipe = RecipeCreator.getInstance().createRecipe(rawData);
		
		//Validate recipe
		return recipe;
	}

	fetchDatafromRemote(url:string, APIKey: string) {
		//Authenticate access
		this.remoteData.authenticateAccess(APIKey);	

		//Validate path before calling method
		const rawData = this.remoteData.loadDatafromPath(url);

		//Validate rawData before calling recipe creator
		const recipe = RecipeCreator.getInstance().createRecipe(rawData);

		//Validate recipe
		return recipe;
	}

	getRecipe( recipeID: string) {
		RecipeRepository.getInstance().getRecipeByID(recipeID);
	}

}

export default DataFactory;