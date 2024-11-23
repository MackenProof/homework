function reverseFilter(removeFunc, array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (!removeFunc(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5, 6];

const removeEven = num => num % 3 === 0;
const result = reverseFilter(removeEven, numbers);

console.log(result);