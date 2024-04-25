const arr = [43, 1, 4, 25, 2, 76]
let count = 0;

function bubbleSorting(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 2; j++){
            if(arr[j + 1] < arr[j]){
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
            count += 1;
        }
    }
    return arr;
}

console.log("Sorted array: " + bubbleSorting(arr))
console.log("Interations: " + count)