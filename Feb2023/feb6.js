function squareSum(numbers){
numbers.map((e)=>Math.pow(e,2)).reduce((a,b)=>a+b)
}
squareSum([1,2])