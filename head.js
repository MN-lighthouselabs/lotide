const head = function(array) {
	if (Array.isArray(array)) {
		if (array.length > 0) {
			return array[0];
		}
		return undefined;
	}
	return undefined;
}
