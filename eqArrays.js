const assertEqual = function(actual, expected) {
	console.assert(actual === expected, actual + " not equal to " + expected);
};

const eqArrays = function(arr1, arr2) {
	let result = false;
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		return arr1.join(",") === arr2.join(",");
	}
	return result;
}
