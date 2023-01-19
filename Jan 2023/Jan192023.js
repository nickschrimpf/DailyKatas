// 8Kyu
// You will be given an array a and a value x.
// All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
function check(a, x) {
    return a.includes(x);
}

// 7KYU
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
function oddOrEven(array) {
    let sum = 0;
   if(array.length === 0){
     sum = 0;
   }
   for(let i = 0;i < array.length;i++ ){
       sum += array[i];
   }
   return sum % 2 ? 'odd':'even';
 }

// OPPERTUNITY FOR A REDUCE Function

// 8 KYU
// DESCRIPTION:

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    console.log(num)
     let counter = 0;
     let i = 0;
     if(num <= 0){
       return num
     }
     if(num > 0 && num < 1){
       return -num
     }
   do{
     i++;
     counter--
   }while(i<num)
   return counter
 }

 function makeNegative(num) {
    return -Math.abs(num);//The Math.abs() static method returns the absolute value of a number.
  }

// 7KYU
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain 
// anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

  function validatePIN (pin) {
    let result
    if(pin.length !== 4 && pin.length != 6){
      result = false;
    }else{
      return /^\d+$/.test(pin); //REXEX to test if all elements of a string are numbers return true if not return false
    }
    return result
  }

//   With out regex here we would have to try to convert everything to a number and
//    if we got NAN anywhere we could throw false

// The / and / characters are used to start and end a regular expression.
// The ^ character marks the beginning of the string input, and the $ character marks the end of it.
// The \d pattern matches any digit (0 – 9) in the string.
// Adding the + character after the \d makes the regex match one or more occurrences of the \d pattern.
// So the regex matches a string that starts and ends with a consecutive sequence of digits.
// We can use the [0-9] pattern to match digits. This pattern matches any number character between 0 and 9.

// Full regex solution adding {4}and{6} to the /d pattern
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }


//   8KYU
// Your classmates asked you to copy some paperwork for them. 
// You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
    if(m <= 0 || n <= 0){
      return 0;
    }else{
      return n * m
    }
}
  