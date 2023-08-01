export default (error, req, res) => {
	if (error.isError) {
		res
			.status(error.statusCode)
			.json({ name: error.name, message: error.message });
	}

	res.status(error.statusCode || 500).json({ message: error.message });
};
