//functions


function answerer(object, tryCounter=0){

  if(object.Response === 'recursion'){
    while(tryCounter < 100){
     console.log(`this is recursion`)
     return answerer(object, tryCounter +1)
    }
    return console.log('get it? Y/N')
   } 
   if (object.Answer === object.Response) return console.log(object.Explanation)
   if(tryCounter > 0 && object.Answer !== object.Response) {
     
   user1.gCoin = user1.gCoin - 25
     console.log(`Nope! Try again`)
   }
   if(tryCounter >= 5){return console.log(`Looks like you've tried ${tryCounter} times. ${object.Explanation}`)}
     console.log(object.Question)
      object.Response = prompt('')
 


   //console.log(object)
   
   return answerer(object, tryCounter + 1)
 
}

function gCoinUpdate(player, question){
 player.gCoin += 100 * question.Difficulty
}

//section for question objects


// Question 1 
let hoistQuestion = {
 Question: `Between var, let and const, what keyword is hoisted during the allocation phase and assigned a value of undefined? \n1) let \n2) var \n3) const`,
 Response: undefined,
 Answer: '2',
 Explanation: `The answer is var. Referencing var before assignment returns undefined.Referencing let or const prior to assignment throws a reference error`,
 Difficulty: 1
}

let prototypeQuestion = {
 Question: `Objects all inherit properties and methods from a parent object. Where are these properties and methods stored? \n1) prototype \n2) object`,
 Response: undefined,
 Answer: '1',
 Explanation: `Answer is prototype. Inherited properties and methods are stored in the constructor's prototype attribute.`,
 Difficulty: 1
}

let filterQuestion = {
 Question: 'You have an array full of numbers, and need to get all values above the number 10. What method do you use when constructing your function? \n1) reduce \n2) map \n3) filter',
 Response: undefined,
 Answer: '3',
 Explanation: 'The answer is filter. The filter method allows you to set a callback function as a criteria, then filters out values in an array based on it.',
 Difficulty: 2
}

let functionQuestion = {
 Question: `Take a look at the following line of code: const example = () => console.log('hello world'). Is this a \n1) Function Expression or \n2) Function Declaration`,
 Response: undefined,
 Answer: '1',
 Explanation: `A function declaration is an independent line of code, while a function expression is written more like a value within a variable.`,
 Difficulty: 3
}

let restSpreadQuestion = {
 Question: `Do you use a 1) spread operator or a 2) rest paramater when you invoke the function?`,
 Response: undefined,
 Answer: '1',
 Explanation: `Since parameters are only parameters when you declare your function, that's when you'll see the rest parameters - when the function's at rest. But when you invoke your function, you've got to get it operating, and that's where the spread operator comes into play`,
 Difficulty: 3
}

let funcProgrammingQuestion = {
 Question: `What is the term for a function that is treated as a variable? \n1) Pure Functions \n2) Higher-Order Function \n3) First-Class Function`,
 Response: undefined,
 Answer: '3',
 Explanation: `First class functions can be used as variables and passed to other functions as arguments.`,
 Difficulty: 4
}

let recursionQuestion = {
 Question: `What is recursion? Hint: it\'s 'recursion' `,
 Response: undefined,
 Answer: 'recursion',
 SpecialKey: 'secret'
 // Explanation:
 // Difficulty:
}

//Section for Question Lists
let tier1Questions = [hoistQuestion, prototypeQuestion]
let tier2Questions = [filterQuestion]
let tier3Questions = [functionQuestion, restSpreadQuestion]
let tier4Questions = [funcProgrammingQuestion, recursionQuestion]

//section for player objects

let beginGameQuestions = []
let nameStore
let ageStore
let jobStore


class PlayerCreator {

 constructor(name,age, occupation) {
      this.name = name
      this.age = age
      this.currHealth = 50
      this.playerLevel = 1
      this.maxHealth = this.playerLevel * 50
      this.gCoin = 50 //Math.random()*-1000
      this.occupation = occupation
 }

 drink () {


 }

 eat () {

   
 }

 cry () {

   
 }
 
}

// this could be an opportunity to practice using set timeout function by splitting up the string line by line and passing it line by line to a setTimeout that delays the console log to the screen
console.log(`*****INTRO*****
The year is 3034. ChatGPT took over the world. There are few humans left who can still code. Most just barely scrape out a living cobbling together bits of code copied from an old stackoverflow archive. That can't code - not really. There are rumors of one left out there who still can, who knows a map() from a forEach(), a var from a let, a stackframe from a callstack, and a pancake from a flapjack. Is that you? Are you the last coder in the world? Y/N`)
console.log(' ')

function intro(){
 


let promptAns = prompt(`Are you the last coder in the world? Y/N`)

if(promptAns === 'N' || promptAns === 'n')
{

console.log(`Sorry pal, whether you want to be or not, you are the last coder in the world`)
promptAns = 'Y'
intro()
}
else if(promptAns === 'Y' || promptAns === 'y'){
getPlayerInfo()

}
else{ 
 console.log(`The only valid answer is that (Y)es, you are the last coder in the world`)
 intro()}
}

intro()
// have to figure out a better way to break up these console logs of these lines of code
//setTimeout(()=>console.log(`Is that you?`),2000)
//setTimeout(()=>console.log(`Are you the last coder in the world?`), 4000)



function getPlayerInfo(){
nameStore=prompt('What is your name?')
while(nameStore === ''){
 console.log(`That's not a name!`)
 nameStore=prompt('What is your name?')
}
ageStore=prompt('What is your age?')


// // age contains any sym

// const entity = {
//   strings: ["@", "#", "$", "%", "&"],
//   symbols: ["!", "*", "^", "-", "+"],
// };


// while (
//   entity.symbols.some(symbol => ageStore.includes(symbol)) ||
//   entity.strings.some(string => ageStore.includes(string))
// ) {
//   console.error('Age contains symbols or strings from the entity');

//   // Rest of the code or actions to be performed if symbols or strings are found

//   ageStore = prompt("Enter your age again:");
// }
//   // end testing


 
while(parseInt(ageStore) > 120)  {
  console.log(`If you were really ${ageStore} years old, you wouldn't be playing this game, cause old people dont know how to work anything`)
  ageStore=prompt(`What is your age?`)

}

jobStore=prompt('What is your occupation?')
while(jobStore==='' || jobStore==='brokie')  {
 console.log(`Get a job and then come back u hobo`)
jobStore=prompt('What is your occupation?')

}

 



}





const user1 = new PlayerCreator(nameStore, ageStore, jobStore)

console.clear()
console.log(`[G-COIN: ${user1.gCoin}]`)
console.log('')
console.log(`Welcome to BazeTopia baby! Says here on your papers you're a ${user1.occupation}. So I guess you must have some experience with variable hoisting.`)
promptAns = prompt(`Can you tell me what's wrong with my allocator 🐊 over here? Press Enter`)



 console.log(`Great! This thing's been acting up lately - trouble with the thing is I can get my var to hoist in, but my let won't let me no matter what I do`)


answerer(hoistQuestion)
gCoinUpdate(user1, hoistQuestion)
console.log(`[G-COIN: ${user1.gCoin}]`)


console.log(`Congratulations on answering that first question!`)




console.log(`The thing is - and I didn't want to ask this of you because we just met, but...`)




// console.clear()
answerer(prototypeQuestion)
gCoinUpdate(user1, prototypeQuestion)
console.log(`[G-COIN: ${user1.gCoin}]`)

console.log(`wow you're really getting good at this`)



answerer(filterQuestion)
gCoinUpdate(user1, filterQuestion)
console.log(`[G-COIN: ${user1.gCoin}]`)

console.log('')

console.log('Wow another right answer')

//setTimeout(()=>console.clear(), 5000)

console.log('i wanted to ask you another thing')

answerer(restSpreadQuestion)
gCoinUpdate(user1, restSpreadQuestion)
console.log(`[G-COIN: ${user1.gCoin}]`)

console.log('oh wow you really know your stuff. How about this next one though?')

answerer(funcProgrammingQuestion)
gCoinUpdate(user1, funcProgrammingQuestion)
console.log(`[G-COIN: ${user1.gCoin}]`)

console.log('another one right! I have one final question for you!')

answerer(recursionQuestion)

function gameEnd(){
answerer(recursionQuestion)
let gameEndPrompt = prompt('')
while(gameEndPrompt === 'N' || gameEndPrompt ==='n'){

 return gameEnd()
 
}

if(gameEndPrompt === 'Y' || gameEndPrompt === 'y') {

 console.log(`Congratulations ${user1.name}, your final score is ${user1.gCoin}. Not bad for a ${user1.age} year old ${user1.occupation}`)
}

else{
 console.log(`That's not Y or N! Get ready for more recursion`)
 
return gameEnd()
}

}

gameEnd()

console.log(`Would you like to hear more about this game? (Y/N)`)

function postScript(){
let finalPrompt = prompt('')
 if(finalPrompt === 'Y' || finalPrompt === 'y'){
   console.log(`Game designers: Jack Almadjian, Anil Kondaveeti, Branden Chi, Conor Proffitt`)
   console.log(`Story by M. Night Shyamalan`)
   console.log(`Cinematography: Denise Villanueve`)
   console.log('')
   console.log('')
   console.log('')
   console.log('')
   console.log(`******************************************************************************************************`)
   console.log(`Project aspects include: Intro, demo, technical challenges, stretch features`)
   console.log(``)
   console.log(``)
   console.log(`Technical Challenges`)
   console.log(`*******************************`)
   console.log(`Implementing Recursive Functions to Keep Player on Storyline`)
   console.log(`Creating PlayerConstructor Class`)
   console.log(`Creating conditionals for edge case answers`)
   console.log(``)
   console.log(``)
   console.log(``)
   console.log('Reach Features')
   console.log(`********************************`)
   console.log(`A more coherent storyline`)
   console.log(`Creating Object Creator Class to let players write their own questions`)
   console.log(`Randomizing questions asked`)
   console.log(`Memoization to remove randomly asked quesitons from pool`)
   console.log(`Async and console.clear()`)
   console.log(`Lose if gCoins 0 or below`)
 }
 else if(finalPrompt === 'N' || finalPrompt === 'n'){
   console.log(`press Y`)
   postScript()
 }

 else{
   console.log(`that's not an answer!`)
   postScript()}

 
}

postScript()

