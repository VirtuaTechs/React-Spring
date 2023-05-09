

/**
 * Manager to load and unload resources
 * 
 * This class is used to make functionality of underlying engine independent of the rest of the classes. E.g. we change the engine later, we will only need to update this class
 * 
 */
class ResourceManager{
	private static instance: ResourceManager;
	
	private constructor() {

	}

	static getInstance() {
		if(!ResourceManager.instance) ResourceManager.instance = new ResourceManager();
		return ResourceManager.instance;
	}

	loadImage(url: string) {
		//Load image from the url
	}

	load3DModel(url: string, format: string) {
		//Load 3D model according to the format like glb, fbx etc
	}

	unLoadImage(id: string) {

	}

	unLoad3DModel(id: string) {

	}

}

export default ResourceManager;