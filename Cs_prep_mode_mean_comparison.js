// //Challenge 1 
// function modemean(array) {
//    // mean calculation
// const sum = array.reduce((acc, num) => acc + num, 0);
// const mean = Math.floor(sum / array.length);

// //  mode calculation
// const frequencies = {};
// let maxFrequency = 0;
// let mode = null;



// // comparing mode to mean

// array.forEach((num) => {
//  frequencies[num] = (frequencies[num] || 0) + 1;
//  if (frequencies[num] > maxFrequency) {
//    maxFrequency = frequencies[num];
//    mode = num;
//  }else{
//    return true
//  }
// })
//  return mean===mode;


 
// }

// const numbers = [1,1,2,3,4,33,2,344,56,77,89,8765,5434,45];
// const result = modemean(numbers);

// // console.log(result)




// function arrayToX(num) {
//    const result=[];
//      let currentNum=1
//     for (let i = 1; i <= num; i++) {
//        result.push(currentNum);
//       currentNum += (i + 1);
//      }
   
//      return result;
     
   
//    }
   
//    //Test your answer (delete the //)
//    console.log(arrayToX(1));   // [1]
//    console.log(arrayToX(2));   // [1, 3]
//    console.log(arrayToX(3));   // [1, 3, 6]
// console.log(arrayToX(10));  // [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]
   




function store(){
   return 2+2
}

store.storage = 5
store.name = 2345

console.log(store.name);