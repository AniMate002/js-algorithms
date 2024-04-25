const arr = [43, 1, 4, 25, 2, 76]
let count = 0;

function selectionSorting(arr){
    for(let j = 0; j < arr.length - 2; j++){
        let minIndex = j
        for(let i = j+1; i < arr.length - 1; i++){
            if(arr[i] < arr[minIndex]) minIndex = i
            count += 1;
        }
        let toPutForward = arr[j]
        arr[j] = arr[minIndex]
        arr[minIndex] = toPutForward
    }
    return arr
}

console.log("Sorted array: " + selectionSorting(arr))
console.log("Interations: " + count)