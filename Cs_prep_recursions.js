////////////////////////////
//     Challenge 1
////////////////////////////

// function repeater(char, n = 5) {
// 	if(n<=0){
//     return char
//   }
  
//    return char + ' '+  repeater(char, n - 1);
  
// }

// console.log(repeater('hello'))
// To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g')); // -> 'ggggg'
// console.log(repeater('j'));// -> 'jjjjj'


////////////////////////////
//     Challenge 2
////////////////////////////



  
  
function isEven(n) {
   if (n === 0) {
     return true; // Base case: n is 0, so it is even
   } else if (n === 1) {
     return false; // Base case: n is 1, so it is odd
   } else if (n < 0) {
     return isEven(-n); // Convert negative n to positive and recursively call isEven
   } else {
     return isEven(n - 2); // Recursively subtract 2 from n until a base case is reached
   }
   
 }
 
 
 
 
 // To check if you've completed the challenge, uncomment these console.logs!
 // console.log(isEven(0)); // -> true
 // console.log(isEven(5)); // -> false
 // console.log(isEven(10)); // -> true
 // console.log(isEven(-5)); // -> true
 
 
 ////////////////////////////
 //     Challenge 3
 ////////////////////////////
 
 
 // function factorial(num) {
 
 //   	if(num<=1){ return 1}
   
 //       return factorial(num-1) * num
     
 // }
 
 // // To check if you've completed the challenge, uncomment these console.logs!
 // console.log(factorial(4)); // -> 24
 // console.log(factorial(6)); // -> 720
 // console.log(factorial(0)); // -> 1
 
 
 
 
 ////////////////////////////
 //     Challenge 4
 ////////////////////////////
 
 
 function getLength(array, i = 0) {
   
      if(!array[0]){return i}
   
   // for(let x=0; x<getLength(array-1);x++){
   //   console.log(i)
   // }
   
   return getLength(array.slice(1), i+1)
   console.log(i)
   
   // return array[array.length - 1]
   
   
    
 }
   
    
 
 
 
 // To check if you've completed the challenge, uncomment these console.logs!
 console.log(getLength([1])); // -> 1
 console.log(getLength([1, 2])); // -> 2
 console.log(getLength([1, 2, 3, 4, 5])); // -> 5
 
 
 ////////////////////////////
 //     Challenge 5
 ////////////////////////////
 
 
 function pow(base, exponent) {
 
 }
 
 // To check if you've completed the challenge, uncomment these console.logs!
 // console.log(pow(2, 4)); // -> 16
 // console.log(pow(3, 5)); // -> 243
 
 ////////////////////////////
 //     Challenge 6
 ////////////////////////////
 
 
 function flow(input, funcArray, i = 0) {
 
 }
 
 // To check if you've completed the challenge, uncomment this code!
 // function multiplyBy2(num) { return num * 2; }
 // function add7(num) { return num + 7; }
 // function modulo4(num) { return num % 4; }
 // function subtract10(num) { return num - 10; }
 // const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
 // console.log(flow(2, arrayOfFunctions)); // -> -7
 
 
 
 ////////////////////////////
 //     Challenge 7
 ////////////////////////////
 
 
 function fib(n) {
 
 }
 
 // To check if you've completed the challenge, uncomment this code!
 // console.log(fib(1)); // -> 1
 // console.log(fib(2)); // -> 1
 // console.log(fib(7)); // -> 13
 
 ////////////////////////////
 //     Challenge 8
 ////////////////////////////
 
 function headsOrTails(n) {
 
 }
 
 // To check if you've completed the challenge, uncomment this code!
 // console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
 // console.log(headsOrTails(3));
 // -> [
 //   ['heads', 'heads', 'heads'],
 //   ['heads', 'heads', 'tails'],
 //   ['heads', 'tails', 'heads'],
 //   ['heads', 'tails', 'tails'],
 //   ['tails', 'heads', 'heads'],
 //   ['tails', 'heads', 'tails'],
 //   ['tails', 'tails', 'heads'],
 //   ['tails', 'tails', 'tails'],
 // ]
 
 ////////////////////////////
 //     Challenge 9
 ////////////////////////////
 
 function getAllCombos(arr) {
 
 }
 
 // To check if you've completed the challenge, uncomment this code!
 // console.log(getAllCombos(['a', 'b'])); // -> [['a','b'], ['a'], ['b'], []]
 // console.log(getAllCombos(['a', 'b', 'c']));
 // -> [
 //   ['a', 'b', 'c'],
 //   ['a', 'b'],
 //   ['a', 'c'],
 //   ['a'],
 //   ['b', 'c'],
 //   ['b'],
 //   ['c'],
 //   [],
 // ]
 