// 1
// var age = prompt("Please enter your age:");
// age = parseInt(age);
// if (age >= 18) {
//   var firstName = prompt("Please enter your first name:");
//   var lastName = prompt("Please enter your last name:");

//   console.log("Hello " + firstName + " " + lastName);
// } else {
//   console.log("You are a minor");
// }


// 2
// var questions = [
//     {
//       question: "What is the capital of France?",
//       answers: ["Paris", "London", "Berlin", "Madrid"],
//       correctAnswer: "Paris"
//     },
//     {
//       question: "Where is the Great Wall of China located?",
//       answers: ["China", "India", "Japan", "Korea"],
//       correctAnswer: "China"
//     },
//     {
//       question: "When did the Titanic sink?",
//       answers: ["1912", "1920", "1930", "1940"],
//       correctAnswer: "1912"
//     }
//   ];
  
//   var correctAnswers = 0;
  
//   for (var i = 0; i < questions.length; i++) {
//     var userAnswer = prompt(questions[i].question + "\n" + 
//       "A) " + questions[i].answers[0] + "\n" +
//       "B) " + questions[i].answers[1] + "\n" +
//       "C) " + questions[i].answers[2] + "\n" +
//       "D) " + questions[i].answers[3]
//     ).toUpperCase();
  
//     if (userAnswer === questions[i].correctAnswer.toUpperCase()) {
//       correctAnswers++;
//     }
//   }
  
//   alert("You answered " + correctAnswers + " out of " + questions.length + " questions correctly.");
  


// 3
// var number1 = parseFloat(prompt("Enter the first number:"));
// var operation = prompt("Choose an operation (+, -, *, /, =):");
// var number2 = parseFloat(prompt("Enter the second number:"));
// var result;

// if (operation === "+") {
//   result = number1 + number2;
// } else if (operation === "-") {
//   result = number1 - number2;
// } else if (operation === "*") {
//   result = number1 * number2;
// } else if (operation === "/") {

//     if (number2 === 0) {
//     result = "Error: Division by zero";
//   } else {
//     result = number1 / number2;
//   }
// } else if (operation === "=") {
//   result = number1 === number2;
// } else {
//   result = "Invalid operation";
// }

// alert("Result: " + result);
