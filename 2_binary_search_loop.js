const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let counter = 0;

function binarySearch(arr, elToSearch){
    let tempArr = [...arr]
    while(true){
        counter += 1;
        const middleIndex = Math.floor((tempArr.length / 2));
        if(tempArr[middleIndex] === elToSearch) return elToSearch

        if(tempArr[middleIndex] < elToSearch){
            tempArr = tempArr.slice(-middleIndex)
        }else if(tempArr[middleIndex] > elToSearch){
            tempArr = tempArr.slice(0, middleIndex)
        }
    }
}
console.log("Found element: " + binarySearch(arr, 10))
console.log("Iterations: " + counter)