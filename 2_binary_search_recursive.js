const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let counter = 0;

function binarySearchRecursive(arr, item, start, end){
    const middleIndex = Math.floor((start + end) / 2)
    counter += 1;
    if(arr[middleIndex] === item){
        return middleIndex
    }
    if(arr[middleIndex] > item){
        return binarySearchRecursive(arr, item, 0, middleIndex - 1)
    }else if(arr[middleIndex] < item){
        return binarySearchRecursive(arr, item, middleIndex + 1, end)
    }
}

console.log("Found index: " + binarySearchRecursive(arr, 7, 0, arr.length))
console.log("Interations: " + counter)
