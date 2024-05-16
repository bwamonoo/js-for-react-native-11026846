
const processArray = (numbers) => {
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



const formatArrayStrings = (arrayString, arrayNumber) => {
	if(arrayString.length == arrayNumber.length) {
		return arrayString.map((text, index) => {
			return(arrayNumber[index] % 2 == 0)
						? text.toUpperCase()
						: text.toLowerCase();
		});
	}

	return false;
}

arrayText = ['Hi', 'Hello', 'Hey', 'Yo', 'Man', 'Bro', 'Gee'];

console.log(formatArrayStrings(arrayText, processArray(arrayNum)));

module.exports = {
	arrayNum,
	arrayText,
	processArray,
	formatArrayStrings
};
