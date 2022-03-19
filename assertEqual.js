// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
	console.assert(actual === expected, actual + " not equal to " + expected);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

