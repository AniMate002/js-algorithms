function cashFunction(callbackFunction){
    const cash = {}
    return function(n){
        if(cash[n]){
            console.log("Взято из кеша: " + cash[n])
            return cash[n]
        }else{
            const result = callbackFunction(n)
            console.log("Подсчитала функция: " + result)
            cash[n] = result
            return result
        }
    }
}



function factorial(number){
    let result = 1;
    while(number >= 1){
        result *= number
        number -= 1;
    }
    return result
}



const cashedFactorial = cashFunction(factorial)
cashedFactorial(2)
cashedFactorial(3)
cashedFactorial(4)
cashedFactorial(2)
cashedFactorial(4)
cashedFactorial(3)


