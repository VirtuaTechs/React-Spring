import Step from "./Step";

enum type {
	folded,
	flat
}

class Serve extends Step{

	private servingStyle: type;
	constructor( servingStyle: type) {
		super();
		this.servingStyle = servingStyle;
	}
}

export default Serve;