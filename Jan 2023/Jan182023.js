
// 8 KYU
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
// https://en.wikipedia.org/wiki/Triangle
function otherAngle(a, b) {
    return 180-(a+b);
  }

// 7 KYU
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


// 7 KYU
// Create a function that takes an integer as an argument and returns "Even" 
// for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
};

// "There is a game, where four letters A, B, C, D are surrounded by numbers. Each letter wants to score as much points as possible, 
// while the numbers are moving around them."
// Example of a game grid

// 07004
// 0 A 0
// 0D7B8
// 5 C 4
// 02000
// Input

// numbers

// an array of non negative integers representing the points available to score
// Output

// return a map / dictionary with the scores for each letter when the game ended (see solution setup of your language for more details)
// Initial Setup

// 17 non negative integers are available, of which 16 on the border and the last one in the center
// going from left to right in the array of numbers, each border number starts the game on the perimeter, starting at the top-left corner, and going in a clockwise direction
// the game is played by 4 letters: A, B, C, D
// the letters have fixed positions in the game, respectively at the top, right, bottom and left of the center number
// all letters touch 1 border number and the center number
// at least 1 number with value 0 is guaranteed to be available
// all numbers have a value: 0 <= n <= 9
// the game is played in rounds and at the end of each round, numbers move to the next position
// Example: 

// numbers: [0,7,0,0,4,0,8,4,0,0,0,2,0,5,0,0,7]

// game:

// 07004
// 0 A 0
// 0D7B8
// 5 C 4
// 02000
// Structure

// letters start with a score of 0 and want to score points
// as long as the objective has not been reached, the game is played in consecutive rounds
// each round has the following structure:
// letters try to score points
// numbers make progress
// objective is checked
// return game result when objective is met
// continue with next round otherwise
// Letters trying to score points

// the actions of each letter are independant from those of another, meaning the order in which letters are picked to score points is irrelevant
// a letter has to obey by the following rules:
// (note that an actual game consists of 4 letters, while these examples may contain fewer)
// if both the border and center number are 0, no points can be scored because no points are available to score
// 00000
// 0 A 0
// 0 0 0
// 0   0
// 00000
// if both the border and center number are different from 0, no points can be scored because this letter is currently blocked by those numbers
// 00500
// 0 A 0
// 0 2 0
// 0   0
// 00000

// if the border number is 0 and the center number isn't:
// the letter scores the amount of the center number (A: +2, B: +2 in example)
// the letter moves that amount minus 1 to its border (border numbers of A and B: (2 - 1) = 1 in example)
// the center number gets reset to 0, but only after all numbers have tried scoring in this round
// 00000     00100
// 0 A 0     0 A 0
// 0 2B0  -> 0 0B1
// 0   0     0   0
// 00000     00000
// if the center number is 0 and the border number isn't:
// the letter scores the amount of the border number (A: +4, B: +3 in example)
// the letter moves that amount minus 1 to its center (center: (4 - 1) + (3 - 1) = 5 in example), but only after all numbers have tried scoring in this round, and the resulting value in the center will be the sum of moves performed by the individual letters
// the border number gets reset to 0
// 00400     00000
// 0 A 0     0 A 0
// 0 0B3  -> 0 5B0
// 0   0     0   0
// 00000     00000
// Numbers make progress

// the border numbers rotate clockwise
// Example: 

// numbers before rotation: [0,3,0,0,4,0,8,4,0,0,0,2,0,5,0,1,7]
// numbers after rotation : [1,0,3,0,0,4,0,8,4,0,0,0,2,0,5,0,7]
// Checking objective

// the game ends when either:
// at least one letter reached a score of 100 or more
// all numbers have been decreased to 0
//  Tutorial
//  Examples
// These examples correspond to the sample tests. For each test, a visual representation of the initial game setup is provided, together with the total score of each letter when the game ends, and the expected result to return. Use the rules described in section Game -> Structure to pass the tests.

// Sample Test 1

// const numbers : [0,0,2,2,0,1,0,0,0,0,0,0,1,0,0,0,0]

// game:

// 00220
// 0 A 1
// 0D0B0
// 0 C 0
// 10000

// score at end of game: { A: 4, B: 3, C: 3, D: 3 }

// const numbers = [1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,0];
// const numbers = [1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1] no chances to score again;
// const numbers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] no chances to score because there are no points on the board;

const numbers = [0,7,0,0,4,0,8,4,0,0,0,2,0,5,0,0,7]

function playAGame(numbers){
  let res = {A:0,B:0,C:0,D:0};
  let round = 0;

  if(round === 0){
    startRound(numbers);
  }
  function startRound(board) {
    round++
    console.log(`round ${round} board`)
    console.log(board)
    calcLetterScore(board);
  }
  function calcLetterScore(numbers){
    let aBorder = numbers[2];
    let bBorder = numbers[6];
    let cBorder = numbers[10];
    let dBorder = numbers[14];

    let centerNum = numbers[numbers.length-1];
    let nextRoundCenter = centerNum;
    let scoreChanges = {};
    if(
        centerNum === 0 && 
        aBorder === 0 && 
        bBorder === 0 && 
        cBorder === 0 && 
        dBorder === 0 
      ){
      console.log('end round no chances to score');
      endRound(null,numbers,nextRoundCenter);
    }else if(
        centerNum > 0 && 
        aBorder > 0 && 
        bBorder > 0 && 
        cBorder > 0 && 
        dBorder > 0
      ){
      console.log('end round no chance to score');
      endRound(null,numbers,nextRoundCenter);
    }else{
      if(centerNum === 0){
        if(aBorder > 0){
          scoreChanges.A = aBorder;
          nextRoundCenter += aBorder -1;
         
          numbers.splice(2,1,0)
          console.log(`a border ${aBorder} newValue ${newABorderValue}  & nr center ${nextRoundCenter}`);
        };
        if(bBorder > 0){
          scoreChanges.B = bBorder
          nextRoundCenter += bBorder -1
          numbers.splice(6,1,0)
          console.log(`B border ${bBorder} newValue 0 & nr center ${nextRoundCenter}`);
        };
        if(cBorder > 0){
          scoreChanges.C = cBorder
          nextRoundCenter += cBorder -1
 
          numbers.splice(10,1,0)
          console.log(`c border ${cBorder} newValue 0 & nr center ${nextRoundCenter}`);
        };
        if(dBorder > 0){
          scoreChanges.D = dBorder
          nextRoundCenter += dBorder -1
          numbers.splice(14,1,0)
          console.log(`d border ${dBorder} new Value 0 & nr center ${nextRoundCenter}`);
        };
          endRound(scoreChanges,numbers,nextRoundCenter);
      }else if(centerNum > 0){
        if(aBorder === 0){
          scoreChanges.A = centerNum;
          nextRoundCenter = 0;
          newABorderValue = centerNum -1
          numbers.splice(2,1,newABorderValue)
        };
         if(bBorder === 0){
          scoreChanges.B = centerNum;
          nextRoundCenter = 0;
          newABorderValue = centerNum -1
          numbers.splice(6,1,newABorderValue)
        };
        if(cBorder === 0){
          scoreChanges.C = centerNum;
          nextRoundCenter = 0;
          newCBorderValue = centerNum -1
          numbers.splice(10,1,newCBorderValue)
        };
        if(dBorder === 0){
          scoreChanges.D = centerNum;
          nextRoundCenter = 0;
          newDBorderValue = centerNum -1
          numbers.splice(14,1,newDBorderValue)
        };
        console.log(numbers)
        endRound(scoreChanges,numbers,nextRoundCenter);
      };
    };
  };
  function endRound(scoreChanges,board,nextRoundCenter){
    addScoreChanges(scoreChanges);
    console.log(board)
    console.log('the board from end round')
    let borderNumbers = board.slice(0,16);
    if (checkforLetterWinner() || checkForBorderZeros(borderNumbers) && nextRoundCenter != 0) {
      weHaveAWinner()
    }else{
      let lastEl = borderNumbers[borderNumbers.length-1];
      borderNumbers.unshift(lastEl);
      borderNumbers.splice(borderNumbers.length-1,1,nextRoundCenter);
      console.log(borderNumbers)
      startRound(borderNumbers)
    }
  }
  function addScoreChanges(scoreChanges){
    console.log(scoreChanges)
    if(scoreChanges){
      if(scoreChanges.A){
        res.A += scoreChanges.A;
      }
      if(scoreChanges.B){
        res.B += scoreChanges.B
      }
      if(scoreChanges.C){
        res.C += scoreChanges.C
      }
      if(scoreChanges.D){
        res.D += scoreChanges.D
      };
    };
  };
  function checkforLetterWinner(){
    console.log('Checking for winner!')
    if(res.A >= 100 || res.B >= 100 || res.C >= 100 || res.D >=100){
      console.log('we have a winner');
      return true
    }else{
      console.log('we do not have a winner');
      return false
    };
  };
  function checkForBorderZeros(board){
    let zeros = []
    for(let i = 0;i<board.length;i++){
      if(board[i] != 0){
        console.log('value found in border '+ board[i])
        return false
      }else{
        zeros.push(board[i]);
      };
      if(zeros.length === 16){
        console.log('all zeros')
        return true;
      };
    };
  };
  function weHaveAWinner(){
    console.log(res)
    return res;
  }
};

playAGame(numbers)