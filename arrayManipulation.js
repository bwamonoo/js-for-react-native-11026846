
function processArray(numbers) {
	return numbers.map((number) => {
		if(number % 2 == 0) {
			return number ** 2;
		} else {
			return number ** 3;
		}
	});
}

array = [3,6,4,8,7,9,5];

console.log(processArray(array));