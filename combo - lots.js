function sayHi(name){
    return `Hi, ${name}`;
}

console.log(sayHi("Goodstroke"));

/* 

Write a function called `bigString` that takes in 2 strings and returns which one is bigger.  If the strings are equal in size, tell the user and prints both.
functionName: bigString 
parameters: str1 str2 

*/
function bigString(str1, str2){
    
    if(str1.length > str2.length){
        return str1
} else if(str2.length > str1.length){
    return str2;
} else if(str1.length === str2.length){
    console.log (`${str1} is equal in length to ${str2}`)
    return str1 && str2 
}
}


console.log(bigString("house", "door"))
console.log(bigString("woman", "girl"))
console.log(bigString("gun", "ammo"))

/*

bigNumber
Write a function called bigNumber that takes in 2 numbers and returns which one is greater. If the numbers are equal tell the user.

*/

function bigNumber(num1, num2){
    
    if(num1 > num2){
        return num1
} else if(num2 > num1){
    return num2;
} else if(num1 === num2){
    console.log (`${num11} is equal in length to ${num2}`)
}
}

console.log(bigString("12", "1"))
console.log(bigString("1", "12"))
console.log(bigString("12", "12"))

/*

fiveMore
Write a function called fiveMore that takes in an array of numbers and adds 5 to each odd number then returns the updated array.

*/

function fiveMore(numsArray){
    for(let i = 0; i < numsArray.length; i++){
        if(numsArray[i] % 2 === 1){
            numsArray[i] += 5; 
        }

    } return(numsArray)
}
console.log(fiveMore([1,2,3,4]))

/* 

arraySummer
Write a function called `arraySummer` that takes in an array of numbers and adds each number in the array together.  Return the total.

*/


function arraySummer(numsArray){
sum = 0;
    for(let i =0; i < numsArray.length; i++)
    sum += numsArray[i]
 {
   return(sum)
 }
}
console.log(arraySummer([1,2,3,4,5]))





function everyDivisiible(n){
    if(n < 10){
    for(let number = 1; number <= 100; number++){
        if(number % n === 0){
            console.log(number);
        }
    }
}
}

everyDivisiible(5)