//Mathematical functions
// Stores the 2 random numbers generated
var number1;
var number2;
//The maximum number used in any sum - smaller number to keep it easy for 5-7 year olds
var maxNum = 10;
var randomQuNum;
// var maxTries = 5;
// var count = 0;
var addQuestions = [];
var minusQuestions = [];
var multiplyQuestions = [];
var divideQuestions = [];

// Generate the random numbers and store them
function generateNumbers(){
	number1 = Math.ceil(Math.random()*maxNum);
	number2 = Math.ceil(Math.random()*maxNum);
	//Multiply by 10 as only 10 questions for each of the operators
	randomQuNum = Math.floor(Math.random()*10);

	// Set up the questions
	addQuestions = ["Ben has "+number1+" counters and Tilly has "+number2+" counters, how many are counters altogether?",
	"David and Liz have "+number1+" coloured beads and "+number2+" coloured beads, how many beads altogether?",
	"Mary has "+number1+" earrings and Tina has "+number2+" earrings, what is the total number of earrings?",
	"Robert and Albert have "+number1+" coloured stickers and "+number2+" coloured stickers, how many coloured stickers altogether?",
	"David has "+number1+" mixed fruit and Liz has "+number2+" mixed fruit, what is the total number of mixed fruit?",
	"Tino and Rita have "+number1+" beans and "+number2+" beans, how many beans altogether?",
	"Thuli has "+number1+" jelly beans and Ariko has "+number2+" jelly beans, what is the total number of jelly beans?",
	"Tandana has "+number1+" balls and Flora has balls, how many balls?",
	"Marie has "+number1+" magnets and Lewis has magnets, what is the total number of magnets?",
	"Fiona has "+number1+" coloured rocks and Daniel has "+number2+" coloured rocks, what is the total number of coloured rocks?"
	];

	minusQuestions = ["Ben has "+number1+" counters and gives Tilly "+number2+" counters, how many are counters does Ben now have?",
	"Emmanuel has "+number1+" coloured beads and drops "+number2+" coloured beads, how many beads does David have left?",
	"Mary has "+number1+" earrings and puts "+number2+" earrings in a box, how many earrings are left?",
	"Robert had "+number1+" coloured stickers but haas lost "+number2+" coloured stickers, how many coloured stickers does Robert have left?",
	"David has "+number1+" pieces of mixed fruit and eats "+number2+", how many does David have left?",
	"Tino has "+number1+" beans and has eaten "+number2+" beans, how many beans does Tino have left to eat?",
	"Thuli has "+number1+" jelly beans has given Ariko "+number2+" jelly beans, how many jelly beans does Thuli have now?",
	"Tandana has "+number1+" balls and has left "+number2+" balls in the shed, how many balls does Tandana have to play with?",
	"Marie has "+number1+" magnets and gives Lewis "+number2+" magnets, how many magnets does Marie have?",
	"Fiona has collected "+number1+" coloured rocks but left "+number2+" coloured rocks behind, how many coloured rocks does Fiona have?"
	];

	multiplyQuestions = ["Ben has "+number1+" counters in every tin. There are "+number2+" tins. How many are counters altogether?",
	"Liz has "+number1+" coloured beads in each of her "+number2+" baskets, how many beads altogether?",
	"Mary has "+number1+" earrings in each box. There are "+number2+" boxes. What is the total number of earrings?",
	"Albert has "+number1+" coloured stickers on every page of his book. There are "+number2+" pages. How many coloured stickers altogether?",
	"Timothy has "+number2+" mixed fruit in every bowl. There are "+number2+" bowls. How much mixed fruit altogether",
	"Tino has "+number1+" beans in every packet. There are "+number2+" packets. How many beans altogether?",
	"Thuli has "+number1+" jelly beans in each bag. There are "+number2+" bags. what is the total number of jelly beans?",
	"Tandana has "+number1+" balls in each basket. There are "+number2+" baskets. How many balls altogether?",
	"Marie has "+number1+" magnets in each drawer. There are "+number2+" drawers. How many drawers altogether?",
	"Fiona has "+number1+" coloured rocks in each box. There are "+number2+" boxes. How many coloured rocks altogether?"
	];


	divideQuestions = ["Ben has "+number1+" counters and "+number2+" friends, if Ben shares the counters equally how many can each of them have? There may be some left over.",
	"David has "+number1+" coloured beads and "+number2+" boxes, if David shares the beads equally how many in each box? There may be some left over.",
	"Mary has "+number1+" earrings and wants to share them equally with her "+number2+" sisters, how many does each sister get? There may be some left over.",
	"Pearl has "+number1+" coloured stickers and wants to put the same number of stickers on "+number2+" books, how many stickers on each book? There may be some left over.",
	"David has "+number1+" mixed fruit and "+number2+" friends, if David shares the mixed fruit equally how many can each of them have? There may be some left over that David can eat.",
	"Rita havs "+number1+" beans and "+number2+" boxes. If Rita shares the beans equally how many in each box? There may be some left over.",
	"Thuli has "+number1+" jelly beans and "+number2+" brothers, if Thuli shares the beans equally how many can each of them have? There may be some left over.",
	"Tandana has "+number1+" balls and "+number2+" baskets. If Tandana puts the same number of in each basket, how many balls in each basket? There may be some left over.",
	"Marie has "+number1+" magnets and "+number2+" fridges. If Marie puts the same number of magnets on each fridge, how many magnets are on each fridge? There may be some left over.",
	"Fiona has "+number1+" coloured rocks and "+number2+" bags. If Fiona puts the same number of coloured rocks in each bag, how many coloured rocks are in each bag? There may be some left over.",,
	];
}

//Display the random numbers generated
function setPageNumbers(operator){

	//Display a question from the arrays by using one of the random numbers generated from earlier to select
	// a random question from the relevant array of predefined questions.
	var question= "";

	if(operator == "+")	{
		question = addQuestions[randomQuNum];
	}
	else if(operator == "-")	{
		question = minusQuestions[randomQuNum];
	}
	else if(operator == "x") {
		question = multiplyQuestions[randomQuNum];
	}
	else {
		question = divideQuestions[randomQuNum];
	}
	document.getElementById("number1_sum").innerHTML = number1;
	document.getElementById("number2_sum").innerHTML = number2;
	document.getElementById("operator").innerHTML = operator;

	// document.getElementById("number1").innerHTML = number1;
	// document.getElementById("number2").innerHTML = number2;

	document.getElementById("question").innerHTML = question;
};

/**Calculate the sum of the 2 random numbers that are generated
1- Display the calculation with the randomly generated numbers
2- Create a handle on the submit answer button
3- Do the calculation, then call the function to check the user's answer*/
function add(){
	setPageNumbers("+");

	var answer = document.getElementById("submitAns");
	var correctAns = number1 + number2;
	answer.onclick =  function() {
		var userAns = document.getElementById("answer").value;
		checkUserAnswer("add", userAns, correctAns);
	}
	//Hint for the question
	questionHelp();
}

/**Calculate the subtraction of the 2 random numbers that are generated
1- Display the calculation with the randomly generated numbers
2- Create a handle on the submit answer button
3- Do the calculation, then call the function to check the user's answer*/
function minus(){
	// To make the subtraction easier, we want the first number to be bigger than the second.
	if (number1 < number2){
		var tempNum = number1;
		number1 = number2;
		number2 = tempNum;
	}
	setPageNumbers("-");

	var answer = document.getElementById("submitAns");
	answer.onclick =  function() {

		var userAns = document.getElementById("answer").value;
		var correctAns = number1 - number2;

		checkUserAnswer("minus", userAns, correctAns);
	}
};


/**Calculate the sum of the 2 random numbers that are generated
1- Display the page numbers randomly generated
2- Create a handle on the submit answer button
3- Do the calculation, then call the function to check the user's answer*/
function multiply(){
	setPageNumbers("x");

	var answer = document.getElementById("submitAns");
	answer.onclick =  function() {

		var userAns = document.getElementById("answer").value;
		var correctAns = number1 * number2;

		checkUserAnswer("multiply", userAns, correctAns);
	}
};


/**Calculate the division calculation of the 2 random numbers that are generated
1- Display the page numbers randomly generated
2- Create a handle on the submit answer button
3- Do the calculation, then call the function to check the user's answer*/
function divide(){
	// To make the division easier, we want the first number to be bigger than the second.
	if (number1 < number2){
		var tempNum = number1;
		number1 = number2;
		number2 = tempNum;
	}
	//\xF7 hexadecimal for divide sign
	setPageNumbers("\xF7");

	var answer = document.getElementById("submitAns");
	answer.onclick =  function() {

		var userAns = document.getElementById("answer").value;
		//var correctAns = number1 / number2;

		//Round the division for simplicity for 5-7 year olds, you want to return the largest equal share of the su
		// Doesn't deal with the remainder
		var correctAns = Math.floor(number1 / number2);

		checkUserAnswer("divide", userAns, correctAns);
	}
};

/*Validation checks on the user's answer
Check what calculation/operator we are dealing with - if the answer the user
has entered is correct, recall the function to reset the page and random numbers
generated*/
function checkUserAnswer(type, userAns, correctAns){
	// if (count < maxTries) {
	if(userAns === ""){
		alert("Please enter an answer");
	}
	else if(isNaN(parseInt(userAns))){
		alert("Please enter a number");
	}
	else if (parseInt(userAns) != correctAns)
	{
		//count++;
		alert("That is the incorrect answer");
	}
	else if (parseInt(userAns) === correctAns)		{
		alert("That is the correct answer");
		document.getElementById("answer").value = "";
		generateNumbers();

		if(type ==="add") {
			add();
		}
		else if(type ==="minus") {
			minus();
		}
		else if(type ==="multiply") {
			multiply();
		}
		else {
			divide();
		}
	}
	// }
	// else {
	// 	alert("The correct answer is "+correctAns);
	// }
}

/*This will help to provide a visual representation of the question*/
function questionHelp()
{
	var hint = document.getElementById("help");


	//
	hint.onclick =  function() {
		//for(var i=0; i<number1; i++){
		var counter="";
		var counter2="";
		var imageSrc = '<img src="http://images.clipartpanda.com/apple-clipart-apple5.png" alt="Apple image" width="20" height="40" />'
		for(var i=0; i<number1; i++){
			 counter = imageSrc + counter;
		}
		for(var i=0; i<number2; i++){
			 counter2 = imageSrc + counter2;
		}
		document.getElementById("helpImage1").innerHTML = counter;
		document.getElementById("helpImage2").innerHTML = counter2;
	}


}

// Call the generate the random numbers as soon as the page is open
generateNumbers();

// window.onload = function(){
// };
