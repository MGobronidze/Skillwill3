//  პირველი დავალება
let multiply = (arr)=>{
    let res = 1;
    for (let arg of arr){
        res*=arg;
    }
    return res;
} 

function showResult(first, second, ...args){
    let sum = first + second;
    let mult = multiply(args);
    return [sum, mult];
}

// test
console.log(showResult(1, 4, 9, 10, 45, 289))
console.log(showResult(7, 2, 139))

// მეორე დავალება 