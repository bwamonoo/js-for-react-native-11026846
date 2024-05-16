
function processArray(numbers) {
	return numbers.map((number) => {
		if(number % 2 == 0) {
			return number ** 2;
		} else {
			return number ** 3;
		}
	});
}

arrayNum = [3,6,4,8,7,9,5];

console.log(processArray(arrayNum));



function formatArrayStrings(arrayString, arrayNumber) {
	if(arrayString.length == arrayNumber.length) {
		return arrayString.map((text, index) => {
			return(arrayNumber[index] % 2 == 0)
						? text.toUpperCase()
						: text.toLowerCase();
		});
	}

	return false;
}

arrayText = ['hi', 'hello', 'hey', 'yo', 'man', 'bro', 'gee'];

console.log(formatArrayStrings(arrayText, processArray(arrayNum)));
