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
	prepareQuestions();

	//Set the hint images to blank
//	starBox.style.display = 'none';
//	if(document.getElementById("helpImage1")!= null && document.getElementById("helpImage2") != null){
	// if(document.getElementById("helpImage1")) {
	// 	document.getElementById("helpImage1").innerHTML = "";
	// }
	// if(document.getElementById("helpImage2")) {
	// 	document.getElementById("helpImage2").innerHTML = "";
	// }

//	}
}

//Prepare the array of questions
function prepareQuestions(){
	addQuestions = ["Ben has "+number1+" counter(s) and Tilly has "+number2+" counter(s), how many are counters altogether?",
	"David and Liz have "+number1+" coloured bead(s) and "+number2+" coloured bead(s), how many beads altogether?",
	"Mary has "+number1+" earring(s) and Tina has "+number2+" earring(s), what is the total number of earrings?",
	"Robert and Albert have "+number1+" coloured sticker(s) and "+number2+" coloured sticker(s), how many coloured stickers altogether?",
	"David has "+number1+" mixed fruit and Liz has "+number2+" mixed fruit, what is the total number of mixed fruit?",
	"Tino and Rita have "+number1+" bean(s) and "+number2+" bean(s), how many beans altogether?",
	"Thuli has "+number1+" jelly bean(s) and Ariko has "+number2+" jelly bean(s), what is the total number of jelly beans?",
	"Tandana has "+number1+" ball(s) and Flora has ball(s), how many balls?",
	"Marie has "+number1+" magnet(s) and Lewis has magnet(s), what is the total number of magnets?",
	"Fiona has "+number1+" coloured rock(s) and Daniel has "+number2+" coloured rock(s), what is the total number of coloured rocks?"
	];

	minusQuestions = ["Ben has "+number1+" counter(s) and gives Tilly "+number2+" counter(s), how many are counters does Ben now have?",
	"Emmanuel has "+number1+" coloured bead(s) and drops "+number2+" coloured bead(s), how many beads does David have left?",
	"Mary has "+number1+" earring(s) and puts "+number2+" earring(s) in a box, how many earrings are left?",
	"Robert had "+number1+" coloured sticker(s) but has lost "+number2+" coloured sticker(s), how many coloured stickers does Robert have left?",
	"David has "+number1+" pieces of mixed fruit and eats "+number2+", how many does David have left?",
	"Tino has "+number1+" bean(s) and has eaten "+number2+" beans, how many bean(s) does Tino have left to eat?",
	"Thuli has "+number1+" jelly bean(s) has given Ariko "+number2+" jelly bean(s), how many jelly beans does Thuli have now?",
	"Tandana has "+number1+" ball(s) and has left "+number2+" ball(s) in the shed, how many balls does Tandana have to play with?",
	"Marie has "+number1+" magnet(s) and gives Lewis "+number2+" magnet(s), how many magnets does Marie have?",
	"Fiona has collected "+number1+" coloured rock(s) but left "+number2+" coloured rock(s) behind, how many coloured rocks does Fiona have?"
	];

	multiplyQuestions = ["Ben has "+number1+" counter(s) in every tin. There are "+number2+" tin(s). How many are counters altogether?",
	"Liz has "+number1+" coloured bead(s) in each of her "+number2+" baskets, how many beads altogether?",
	"Mary has "+number1+" earring(s) in each box. There are "+number2+" boxes. What is the total number of earrings?",
	"Albert has "+number1+" coloured sticker(s) on every page of his book. There are "+number2+" page(s). How many coloured stickers altogether?",
	"Timothy has "+number2+" mixed fruit in every bowl. There are "+number2+" bowl(s). How much mixed fruit altogether?",
	"Tino has "+number1+" bean(s) in every packet. There are "+number2+" packet(s). How many beans altogether?",
	"Thuli has "+number1+" jelly bean(s) in each bag. There are "+number2+" bags(s). What is the total number of jelly beans?",
	"Tandana has "+number1+" ball(s) in each basket. There are "+number2+" basket(s). How many balls altogether?",
	"Marie has "+number1+" magnet(s) in each drawer. There are "+number2+" drawer(s). How many drawers altogether?",
	"Fiona has "+number1+" coloured rock(s) in each box. There are "+number2+" boxes. How many coloured rocks altogether?"
	];


	divideQuestions = ["Ben has "+number1+" counter(s) and "+number2+" friends, if Ben shares the counter(s) equally how many can each of them have? There may be some left over.",
	"David has "+number1+" coloured bead(s) and "+number2+" boxes, if David shares the bead(s) equally how many in each box? There may be some left over.",
	"Mary has "+number1+" earring(s) and wants to share them equally with her "+number2+" sister(s), how many does each sister get? There may be some left over.",
	"Pearl has "+number1+" coloured sticker(s) and wants to put the same number of stickers on "+number2+" books(s), how many stickers on each book? There may be some left over.",
	"David has "+number1+" mixed fruit and "+number2+" friends, if David shares the mixed fruit equally how many can each of them have? There may be some left over that David can eat.",
	"Rita havs "+number1+" bean(s) and "+number2+" boxes. If Rita shares the bean(s) equally how many in each box? There may be some left over.",
	"Thuli has "+number1+" jelly bean(s) and "+number2+" brother(s), if Thuli shares the bean(s) equally how many can each of them have? There may be some left over.",
	"Tandana has "+number1+" ball(s) and "+number2+" basket(s). If Tandana puts the same number of in each basket, how many balls in each basket? There may be some left over.",
	"Marie has "+number1+" magnet(s) and "+number2+" fridge(s). If Marie puts the same number of magnet(s) on each fridge, how many magnets are on each fridge? There may be some left over.",
	"Fiona has "+number1+" coloured rock(s) and "+number2+" bags. If Fiona puts the same number of coloured rock(s) in each bag, how many coloured rocks are in each bag? There may be some left over.",,
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
	questionHelp("add");
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
	questionHelp("minus");
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
	questionHelp("multiply");
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

		//Round the division for simplicity for 5-7 year olds, you want to return the largest equal share of the sum
		// Doesn't deal with the remainder
		var correctAns = Math.floor(number1 / number2);
		checkUserAnswer("divide", userAns, correctAns);
	}
	questionHelp("divide");
};

/*Validation checks on the user's answer
Check what calculation/operator we are dealing with - if the answer the user
has entered is correct, recall the function to reset the page and random numbers
generated*/
function checkUserAnswer(type, userAns, correctAns){
	// if (count < maxTries) {
	if(userAns === ""){
		messageBox("Please enter an answer.");
	}
	else if(isNaN(parseInt(userAns))){
		messageBox("Please enter a number.");
	}
	else if (parseInt(userAns) != correctAns)
	{
		//count++;
		messageBox("Sorry that is the incorrect answer. Please try again.");
	}
	else if (parseInt(userAns) === correctAns)		{
		messageBox("Well done! That is the correct answer.");
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

/*Message to the user*/
function messageBox(message){
	//console.log("message box called");
	document.getElementById("msgBox").innerHTML = message;
 	var bckgrdMsg = document.getElementById('backgroundMsgBox');
	var closeMsgBox = document.getElementById("closeMsg");
	bckgrdMsg.style.display = 'inline';
	closeMsgBox.style.display = 'block';
// Display thew background as none by default
//use toggle classes to show the background and msgBox
// use button to toggle classes background
// z-index for foreground and background - higher z index more to the front it will appearing
// 3 ways to make something disappear display:none, opacity: 0 or z-index -99

	closeMsgBox.onclick =  function() {
		bckgrdMsg.style.display = 'none';
	}
}

/*This will help to provide a visual representation of the question*/
function questionHelp(sign)
{
	var hint = document.getElementById("help");

	hint.onclick =  function() {
		var counter="";
		var counter2="";
		var imageSrc = '<img src="star.png" alt="Apple image" width="30" height="40" />'
		var imageArray = [];

		if(sign ==="add" || sign === "minus") {
			for(var i=0; i<number1; i++){
				 counter = imageSrc + counter;
			}
			for(var i=0; i<number2; i++){
				 counter2 = imageSrc + counter2;
			}
			document.getElementById("helpImage1").innerHTML = counter;
			document.getElementById("helpImage2").innerHTML = counter2;
		}
		else if(sign ==="multiply"){
			// for(var i=0; i<number2; i++){
			// 	imageArray[i] = "<div>"
			// 	for(var j=0; j<number1; j++){
			// 		imageArray[i] = imageArray[i] + imageSrc;
			// 	}
			// 	imageArray[i] = imageArray[i] + "</div>";
			// }
			// console.log(imageArray);
			// document.getElementById("helpImage1").innerHTML = imageArray;
			var starWidth = number1 * 45;
			var starHeight = number2 * 50;

			var starBox = document.getElementById("stars")
			starBox.style.width = starWidth + "px";
			starBox.style.height = starHeight + "px";
			starBox.style.display = 'block';
		}
		else {
			//For division
			var correctAns = Math.floor(number1 / number2);

			//This might be helpful later
		//	var remainder = number1 % number2;

			// for(var i=0; i<number2; i++){
			// 	var starElem;
			// 	for(var j=0; j<correctAns; j++){
			// 		imageArray[i] = imageArray[i] + imageSrc;
			// 	}
			// 	imageArray[i] = imageArray[i] + "</div>";
			// }
			// console.log(remainder);
			// document.getElementById("helpImage1").innerHTML = imageArray;

			var starWidth = correctAns * 45;
			var starHeight = number2 * 50;

			var starBox = document.getElementById("stars")
			starBox.style.width = starWidth + "px";
			starBox.style.height = starHeight + "px";
			starBox.style.display = 'block';
		}
	}
}

// Call the generate the random numbers as soon as the page is open
generateNumbers();
