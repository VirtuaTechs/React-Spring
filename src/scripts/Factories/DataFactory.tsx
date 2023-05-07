import LocalData  from "../API/LocalData";
import RemoteData from "../API/RemoteData";
//import WebScraper from "../API/WebScraper"; -- Can be added later
import RecipeCreator from "../Recipe/RecipeCreator";

class DataFactory{

	private static localData: LocalData;
	private static remoteData: RemoteData;
	
	constructor() {
		DataFactory.localData = new LocalData();
		DataFactory.remoteData = new RemoteData();
	}

	static fetchDatafromLocal(url:string) {
		//Validate path before calling method
		const rawData = this.localData.loadDatafromPath(url);
		
		//Validate rawData before calling recipe creator
		const recipe = RecipeCreator.createRecipe(rawData);
		
		//Validate recipe
		return recipe;
	}

	static fetchDatafromRemote(url:string, APIKey: string) {
		//Authenticate access
		this.remoteData.authenticateAccess(APIKey);	

		//Validate path before calling method
		const rawData = this.remoteData.loadDatafromPath(url);

		//Validate rawData before calling recipe creator
		const recipe = RecipeCreator.createRecipe(rawData);

		//Validate recipe
		return recipe;
	}

}

export default DataFactory;