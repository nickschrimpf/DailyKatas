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

console.log(minSum(someArray))