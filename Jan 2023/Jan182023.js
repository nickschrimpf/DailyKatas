// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
    return 180-(a+b);
  }


//   Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
//  Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.
//  For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

//   Your task is to convert strings to how they would be written by Jaden Smith.
//   The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
//   Example:
//   Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//   Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    let result = '';
  for(let i = 0;i<this.length;i++){
     if(this[i] === ' ' ){
      result += this[i];
      i++;
      const captNext = this[i].toUpperCase();
      result += captNext;
    }else if(i === 0){
      result += this[0].toUpperCase();
    }else{
      result += this[i];
    };
  };
    return result
};