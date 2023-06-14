// CHALLENGE 1 - ADD CODE BELOW


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const students = [
   { name: 'Wyatt', score: 90, instrument: 'violin'},
   { name: 'Bella', score: 60, instrument: 'cello'},
   { name: 'Patrick', score: 50, instrument: 'tuba'},
   { name: 'Briana', score: 85, instrument: 'clarinet'},
   { name: 'Jane', score: 40, instrument: 'violin'},
   { name: 'Maria', score: 70, instrument: 'cello'},
   { name: 'Emilio', score: 75, instrument: 'violin'},
   { name: 'Vijeta', score: 45, instrument: 'flute'}
 ];
 
//  callback
 const getStudents = (studentsArr, callback) => {
   const studentNames = studentsArr.filter(student => student.name.length >= 5).map(student => student.name);
   callback(studentNames);
 }
 
 const callbackFunction = names => {
   console.log(names);
 };
 
//  console.log(getStudents(students, callbackFunction));
 
// original way
// const st = ()=> {
//   const to= students.map(oop => {
//       return oop.name
//    })
//    return to
// }

// console.log(st());



// end 1st assessment




// 2nd assesment

// play function
const play = (startingHealth) => {
   let health = startingHealth;
 
   const attack = (damageTaken) => {
      health -= damageTaken;
      if (health <= 0) {
        health = 0;
        return 'Game Over';
      }
      return `Your health is ${health}`;
    };
    
 
   const heal = (healAmount) => {
     if (health === 45) {
       return 'Game Over';
     } else {
       health += healAmount;
       return `Your health is ${health}`;
     }
   };
 
   return {
     attack,
     heal
   };
 };
 const playsViolin = (student) => student.instrument === 'violin';
 

const isAbove50 = n => students.filter(n=>n.name>50)

console.log(getStudents(students, isAbove50)); // should log: [ 'Wyatt', 'Bella', 'Briana', 'Maria', 'Emilio']
// console.log(getStudents(students, playsViolin)); // should log: [ 'Wyatt', 'Jane', 'Emilio' ]



// CHALLENGE 2 - ADD CODE BELOW

// // UNCOMMENT THESE LINES TO CHECK YOUR WORK
// const character = play(100);
// console.log(character.attack(20)); // should return "Your health is 80"
// console.log(character.attack(30)); // should return  "Your health is 50"
// console.log(character.attack(20)); // should return "Your health is 30"
// console.log(character.heal(10)); // return "Your health is 40"
// console.log(character.attack(45)); //return "Game over"



// CHALLENGE 3 - ADD CODE BELOW

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
// console.log(repeatString('hello', 3)) // => should return 'hellohellohello'
// console.log(repeatString('hello', 1)) // => should return 'hello'
// console.log(repeatString('hello', 0)) // => should return undefined

// BONUS CHALLENGE - ADD CODE BELOW


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
// const newBird = new Bird('canary', 'red', ['newyork', 'spain'])
// console.log(newBird) // => should log { species: 'canary', 'color: 'red', locations: ['newyork', 'spain'] }
// console.log(newBird.getColor()); // => should return 'red'
// newBird.setColor('yellow');
// console.log(newBird.getColor()); // => should return 'yellow'
// newBird.addLocation('france');
// console.log(newBird.getLocations()) // => should return ['newyork', 'spain', 'france'];


/* BEFORE SUBMITTING YOUR ASSESSMENT:
Please leave a comment below to tell us which Immersive Program you are interested in applying to (East Coast Remote, West Coast Remote, Central Remote, Global Part-Time Remote, NYC Onsite). If you are interested in multiple programs, please write only your top choice so we can connect you with the proper Admissions Team. 
*/