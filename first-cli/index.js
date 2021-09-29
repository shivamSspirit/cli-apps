// this is my second cli 
var readlineSync = require("readline-sync")
 
var score = 0;

var HighScore = [
  {name:"shivam",score:3},
  {name:'alsoShivam',score:4},
  {name:"againBuddy",score:5}
]

var questions = [
  
{
  question: "what is my name? ",
  answer: "shivam"
}, {
  question: "what is my nickname ",
  answer: "gorav"
},
{
  question: "what is my destination ",
  answer: "journey"
},
 {
  question: "what i do for chilling ",
  answer: "work"
},
 {
  question: "my favorite place ",
  answer: "earth"
},

];


function welcome() {
 let userName = readlineSync.question("What's your name?");

  console.log("Welcome "+ userName + "do you know me");
}

function play(question,answer){
let userAnswer = readlineSync.question(question)

userAnswer.toUpperCase()===answer.toUpperCase()?
score+=1 : console.log('wrong')

 console.log("current score: ", score);
  console.log("-------------")
}

function game(){
  for(let i = 0;i<questions.length;i++){
    let currQustion  = questions[i]
    play(currQustion.question,currQustion.answer)
  }
}


function Score(){
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  HighScore.map(score => console.log(score.name, " : ", score.score))
}

welcome()
game()
Score()

