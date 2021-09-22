var readlineSync = require("readline-sync");
var colors = require("colors");

var score = 0;
var userName = readlineSync.question("What is your name? ");
console.log(colors.cyan("Welcome " + userName + "!! \nLets Play"));

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(colors.green("YAYY!! you get it correct") );
    score++;
  } else {
    console.log(colors.red("OOPS!! You got it wrong"))
  }
  console.log(colors.green.underline("Your Current Score is: "+score + "\n"))
}

//questions
var questions = [
  {
  question: "What I do mostly?  ",
  answer: "sleep"
  },
  {
    question: "Which is my favorite fruit?  ",
    answer: "mango"
  },
  {
    question: "Where do i live?  ",
    answer: "Bathinda"
  },
  {
    question: "Who is my favorite singer?  ",
    answer: "Ali Gatie"
  },
  {
    question: "Which i prefer tea or coffee?  ",
    answer: "tea"
  }
]

//looping through the questions
for(var i = 0; i < questions.length ; i++){
  var currentQuestion = questions[i].question;
  var currentAnswer = questions[i].answer;
  play(currentQuestion, currentAnswer);
}

console.log(colors.cyan("Your Score is: "+ score + " out of 5. WELL PLAYED "));

var highScore = {
  name: 'Priya',
  score: 4
  }


console.log(colors.bold("The HighScore is: " +highScore.score + " and scored by " + highScore.name));

console.log("If your score is more than this. ping me & i ll update that.")