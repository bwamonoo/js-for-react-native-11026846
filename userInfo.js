const { arrayNum, arrayText, processArray, formatArrayStrings } = require("./arrayManipulation");

function createUserProfiles(originalNames, modifiedNames) {
	if(originalNames.length == modifiedNames.length) {
		id = 0;
		return originalNames.map((originalName, index) => {
			return {
				originalName,
				modifiedName: modifiedNames[index],
				id: ++id
			}
		});
	}

	return false;
}

console.log(createUserProfiles(arrayText, formatArrayStrings(arrayText, processArray(arrayNum))));