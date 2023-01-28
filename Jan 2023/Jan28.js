// 8KYU
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
    return number % 2 ? number * 9 : number * 8;
}
// 8KYU
// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.
// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
function reverseWords(str){
    const strArray = str.split(' ')
    let result = [];
    for(let i = strArray.length-1; i >= 0 ; i--){
      result.push(strArray[i])
    };
    return result.join(' ') // reverse those words
  };

//   8kyu
// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.
// Your task is to create a function that, given a proper first and last name, will return the correct alias.
// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.
// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."
// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// Examples

// // These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
// Happy hacking!


function aliasGen(first,last){
    const regtest = new RegExp(/^[a-zA-Z]/);
    if(!regtest.test(first)||!regtest.test(last)){
      return 'Your name must start with a letter from A - Z.'
    }else{
      const fi = first[0].toUpperCase();
      const si = last[0].toUpperCase();  
      return firstName[fi]+ ' '+ surname[si]
    };
  };