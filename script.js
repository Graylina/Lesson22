'use strict';

//1
let arr = [2, -5, 1, -2, 0, -3, 2, -14];
function aboveZero(number){

    let positiveArr = number.filter(function(aboveZero){
        return aboveZero >= 0;
    }).map(function(aboveZero) {
        return Math.round(Math.sqrt(aboveZero) * 100) / 100;
    });

    return positiveArr;
}

console.log(aboveZero(arr));

// 2

let arr2 = [4, 3, 5, 5, 0, 4, 8, 6];
function sumResult(array){
    let res = 0;

    array.reduce(function(sum, current){
        if(current === 0 ){
            res = sum;
            return sum;
        }
        return sum + current;
    })
    return res;
}
console.log(sumResult(arr2));

//3
function summArguments(){
    let incoming = 0;
    for(let i = 0; i < arguments.length; i++){
        incoming+=arguments[i];
    }
    return incoming;
}

console.log(summArguments(10, 1, 2, 5));
console.log(summArguments(10)); 
