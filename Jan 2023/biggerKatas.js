// DESCRIPTION:
// I love Fibonacci numbers in general, but I must admit I love some more than others.
// I would like for you to write me a function that, when given a number n (n >= 1 ), 
// returns the nth number in the Fibonacci Sequence.
// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, 
// and each subsequent number is the sum of the previous two.
const nthFibo = (number) => {
    let fibo = 0;
    let i = 0;
    if(number === 1 ){
        return fibo
    }else{
        if(number === 2){
            fibo++
            return fibo
        }else{
            fibo = 1;
            i = 3;
            do{
                fibo += fibo
                i++
            }while(i < number);
            return fibo
        }
    }
   
}

console.log(nthFibo(3))





// You live in the city of Cartesia where all roads are laid out in 
// a perfect grid. You arrived ten minutes too early to an appointment,
// so you decided to take the opportunity to go for a short walk. 
// The city provides its citizens with a Walk Generating App on their phones
//  -- everytime you press the button it sends you an array of one-letter strings 
// representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only 
// a single block for each letter (direction) and you know it takes you one minute to
// traverse one city block, so create a function that will return true if the walk the 
// app gives you will take you exactly ten minutes (you don't want to be early or late!)
// and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a 
// random assortment of direction letters ('n', 's', 'e', or 'w' only). 
// It will never give you an empty array (that's not a walk, that's standing still!