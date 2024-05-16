# js-for-react-native-11026846

This project contains three main functions written in JavaScript that perform various operations on arrays. These functions are designed to process arrays of numbers and strings and create user profiles based on these processed arrays.

## Functions

### 1. `processArray(numbers)`

This function takes an array of numbers as input and returns a new array where each number is processed as follows:
- If the number is even, it is squared.
- If the number is odd, it is cubed.

**Parameters:**
- `numbers`: An array of numbers.

**Returns:**
- A new array with each number squared if even, or cubed if odd.

**Example:**
```javascript
const arrayNum = [3, 6, 4, 8, 7, 9, 5];
console.log(processArray(arrayNum)); 
// Output: [27, 36, 16, 64, 343, 729, 125]
```

### 2. `formatArrayStrings(arrayString, arrayNumber)`

This function takes two arrays, one of strings and one of numbers, and returns a new array of strings formatted based on the corresponding number:
- If the corresponding number is even, the string is converted to uppercase.
- If the corresponding number is odd, the string is converted to lowercase.

**Parameters:**
- `arrayString`: An array of strings.
- `arrayNumber`: An array of numbers.

**Returns:**
- A new array of formatted strings if both input arrays have the same length.
- `false` if the input arrays have different lengths.

**Example:**
```javascript
const arrayText = ['Hi', 'Hello', 'Hey', 'Yo', 'Man', 'Bro', 'Gee'];
console.log(formatArrayStrings(arrayText, processArray(arrayNum))); 
// Output: ['hi', 'HELLO', 'HEY', 'YO', 'man', 'bro', 'gee']
```

### 3. `createUserProfiles(originalNames, modifiedNames)`

This function takes two arrays of strings, one representing original names and one representing modified names, and returns an array of user profile objects. Each user profile contains:
- The original name.
- The modified name.
- A unique ID.

**Parameters:**
- `originalNames`: An array of original names.
- `modifiedNames`: An array of modified names.

**Returns:**
- An array of user profile objects if both input arrays have the same length.
- `false` if the input arrays have different lengths.

**Example:**
```javascript
console.log(createUserProfiles(arrayText, formatArrayStrings(arrayText, processArray(arrayNum)))); 
// Output: 
// [
//   { originalName: 'Hi', modifiedName: 'hi', id: 1 },
//   { originalName: 'Hello', modifiedName: 'HELLO', id: 2 },
//   { originalName: 'Hey', modifiedName: 'HEY', id: 3 },
//   { originalName: 'Yo', modifiedName: 'YO', id: 4 },
//   { originalName: 'Man', modifiedName: 'man', id: 5 },
//   { originalName: 'Bro', modifiedName: 'bro', id: 6 },
//   { originalName: 'Gee', modifiedName: 'gee', id: 7 }
// ]
```

## Usage

To use these functions, simply call them with the appropriate parameters. The examples provided show how the functions can be used together to process arrays and create user profiles.

## Running the Code

To run the code, copy the functions into a JavaScript file and execute it using a JavaScript runtime environment like Node.js or a browser console.

```javascript
const processArray = (numbers) => {
	return numbers.map((number) => {
		if (number % 2 == 0) {
			return number ** 2;
		} else {
			return number ** 3;
		}
	});
};

const formatArrayStrings = (arrayString, arrayNumber) => {
	if (arrayString.length == arrayNumber.length) {
		return arrayString.map((text, index) => {
			return (arrayNumber[index] % 2 == 0)
				? text.toUpperCase()
				: text.toLowerCase();
		});
	}
	return false;
};

function createUserProfiles(originalNames, modifiedNames) {
	if (originalNames.length == modifiedNames.length) {
		let id = 0;
		return originalNames.map((originalName, index) => {
			return {
				originalName,
				modifiedName: modifiedNames[index],
				id: ++id
			};
		});
	}
	return false;
}

const arrayNum = [3, 6, 4, 8, 7, 9, 5];
const arrayText = ['Hi', 'Hello', 'Hey', 'Yo', 'Man', 'Bro', 'Gee'];

console.log(processArray(arrayNum));
console.log(formatArrayStrings(arrayText, processArray(arrayNum)));
console.log(createUserProfiles(arrayText, formatArrayStrings(arrayText, processArray(arrayNum))));
```

This will output the processed arrays and user profiles as shown in the examples above.