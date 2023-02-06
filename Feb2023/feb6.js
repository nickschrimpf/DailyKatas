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

// 8KYU
function maps(x){
    return x.map((e)=>e*2)
  }

// 8Kyu
function areYouPlayingBanjo(name) {
    if (name.startsWith("R") || name.startsWith("r")) {
      return name + " plays banjo";
    } else return name + " does not play banjo";
  }