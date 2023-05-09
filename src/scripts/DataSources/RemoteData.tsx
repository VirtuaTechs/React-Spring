/**
 * A data source
 * 
 * Fetch data after authentication
 * 
 */

class RemoteData {

	private authenticatorKey: string;
	constructor() {
		this.authenticatorKey = '';
	}

	authenticateAccess(apiKey: string) {
		//Set authenticator key after getting authentication from remote API
	}

	fetchData(url: string) {
		//Use authenticator key to establish connectino
		// Load data from a path given in url
		const string = '';
		return string;
	}

	writeDatatoPath(data: any, url: string) {
		//Use authenticator key 
		//Validate that the data is a recipe
		//Write data to path 
	}
}

export default RemoteData;