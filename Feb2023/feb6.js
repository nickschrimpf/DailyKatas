// 8KYU

function squareSum(numbers){
    return numbers.map((e)=>e*e).reduce((a,b)=>a+b)
}
console.log(squareSum([1,2]))

// 8KYU
function fakeBin(x){
    let result = "";
    for(let i = 0; i < x.length; i++){
      if(x[i] >= '5'){
        result += '1';
      }else{
        result += '0';
      }
    }
    return result;
  }
console.log(fakeBin('4538559312789'))