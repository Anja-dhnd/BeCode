//Create a program that can sort an array without using Array.sort() or a similar method. Test it with multiple arrays of numbers.

// Method 1 (biggest to smallest)

const arr = [4, 56, 5, 3, 34, 37, 89, 57, 98];
const sortWithReduce = (arr) => {
  return arr.reduce((acc, val) => {
    let ind = 0;
    while (ind < arr.length && val < arr[ind]) {
      ind++;
    }
    acc.splice(ind, 0, val);
    return acc;
  }, []);
};
console.log(sortWithReduce(arr));

// Method 2

function bubbleSort(array) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

let numbers = [58, 20, 2, 99, 12, 68, 81];
bubbleSort(numbers);
console.log(numbers);
