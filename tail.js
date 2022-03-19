const tail = function(array) {
	if (Array.isArray(array)) {
		if (array.length > 1) {
			return array.slice(1);
		}
		return [];
	}
	return undefined;
}

console.log(tail([1,2,3]));
console.log(tail([1]));
