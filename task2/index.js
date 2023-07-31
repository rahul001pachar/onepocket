function sumArrayIntegers(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array of integers');
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (Number.isInteger(num)) {
            sum += num;
        } else {
            throw new Error('Array must contain only integers');

        }
    }

    return sum;
}


const inputArray = [1, 2, 3, 4, 5];
const result = sumArrayIntegers(inputArray);
console.log(result); // Output: 15
