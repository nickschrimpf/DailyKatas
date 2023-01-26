// 7KYU

// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 

// Explanation:

// The minimum sum obtained from summing each two integers product ,   5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)


const someArray = [5,4,2,3]
function minSum(array){
    let result = 0;
    array.sort((a,b)=> a - b);
    const recursiveMultiplier = (array) => {
        if(array.length === 0){
            return result;
        };
        console.log(array)
        const roundTotal = array[0] * array[array.length-1];
        console.log('result before round add '+ roundTotal)
        console.log(result)
        result += roundTotal;
        console.log('result')
        console.log(result)
        array.splice(0,1)
        array.splice(array.length-1,1)
        console.log(array)
        recursiveMultiplier(array)
    };
    recursiveMultiplier(array);
    return result; 
}

// console.log(minSum(someArray))


// 7 Kyu
// DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    return str.endsWith(ending);
}
// 7kyu
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.
// Array/list numbers could be a mixture of positives, negatives also zeroes .
// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6

function adjacentElementsProduct(array){
    let result;
    for(let i = 0; i < array.length; i++){
      if(result){
        console.log(result)
        if(array[i]*array[i+1] > result){
            console.log(result = array[i] * array[i+1])
          result = array[i] * array[i+1];
        };
      }else{
        result = array[i] * array[i+1];
      }
    };
    if(isNaN(result)){
        return 0;
    }else{
        return result;
    }
};

// console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]))//-14
// console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]))//50
// console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]))//30
// console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]))//6
console.log(adjacentElementsProduct([1,0,1,0,1000]))//0


