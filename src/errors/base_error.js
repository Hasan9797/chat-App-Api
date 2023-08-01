class BaseError extends Error {
	constructor(name, statusCode, message) {
		super();
		this.name = name;
		this.statusCode = statusCode;
		this.message = message;
		this.isError = true;
	}
}

export default BaseError;
