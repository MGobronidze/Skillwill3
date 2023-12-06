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
const user = {
    fName: "Marta",
    lName: "Smith",
    age: 45,
    banks: [
        {
            bName: "TBC",
            address: {
                city: "Tbilisi",
                Country: "Georgia"
            }

        },
        {
            bName: "Liberty",
            address: {
                city: "Tbilisi",
                Country: "Georgia"
            }
        },
        {
            bName: "BOG",
            address: {
                city: "Tbilisi",
                Country: "Georgia"
            }

        },
        {
            bName: "The Bank of London",
            address: {
                city: "London",
                Country: "UK"
            }
        },
        {
            bName: "New York Community Bank",
            address: {
                city: "New York",
                Country: "USA"
            }

        }         
    ]
}
const {fName, lName, age, banks:[, , {bName, address:{city={}, Country}}]} = user;
console.log(city);

// მესამე დავალება