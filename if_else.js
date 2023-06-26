#!/usr/bin/node
function testNum(a) {
	let result;
	if (a > 0) {
		result = 'positive';
	} else {
		result = 'Not positive';
	}
	return result;
}

console.log(testNum(-5));
