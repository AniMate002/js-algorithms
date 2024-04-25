const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0;
function linearSearch(arr, el){
    for(let i = 0; i < arr.length; i++){
        count += 1;
        if(arr[i] === el){
            return i
        }
    }
    return null
}

console.log(linearSearch(arr, 10))
console.log("Iterations: " + count)