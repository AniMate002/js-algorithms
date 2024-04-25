const arr = [43, 1, 4, 25, 2, 76]
let count = 0;


function quickSorting(arr){
    if(arr.length <= 1){
        return arr
    }
    let middleIndex = Math.floor(arr.length / 2)
    let middleEl = arr[middleIndex]
    let less = []
    let greatest = []
    for(let i = 0; i < arr.length; i++){
        count += 1;
        if(i === middleIndex) continue
        if(arr[i] < middleEl){
            less.push(arr[i])
        }else{
            greatest.push(arr[i])
        }
    }

    return [...quickSorting(less), middleEl, ...quickSorting(greatest)]
}

console.log("Sorted array: " + quickSorting(arr))
console.log("Iterations: " + count)