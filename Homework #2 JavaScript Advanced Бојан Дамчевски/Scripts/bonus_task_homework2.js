function factorial(number){
    if(number === 0){
        return 1;
    }
    return number * factorial(number-1);
}

let result = factorial(5);
console.log(`The result is ${result}`);