// Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.
// Example:
// x = [1, 2, 3, 4, 5]
// t = 3 
// 1+2 = t, so remove 2. No other pairs = t, so rest of array remains:
// [1, 3, 4, 5]
// Work through the array from left to right.
// Return the resulting array.
function trouble(x, t){
    let i = 0;
    do{
      if(x[i] + x[i+1]===t){
        x.splice(i+1,1);
      }else{
        i++;
      }
    }while(i< x.length);
    return x;
  };



// Write a function that takes a positive integer n, 
// sums all the cubed values from 1 to n, and returns that sum.
// Assume that the input n will always be a positive integer.
// Examples: (Input --> output)
// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

  function sumCubes(n){
    let result = 0;
    for(let i = 0;i < n+1 ;i++){
        result += (i * i * i);
      console.log(result)
    }
    return result;
  }

console.log(sumCubes(2))