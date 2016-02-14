/*Mathematical functions*/

//The maximum number used in any sum - smaller number to keep it easy for 5-7 year olds
var maxNum = 10;

function generateNumbers(){
//Generate random numbers
	var numbers = [];
	for(var i = 0; i< 2; i++){
		numbers[i] = Math.ceil(Math.random()*maxNum);
	}
	//Swap numbers around if second number is more than the first.
	numbers.sort(function(a, b) {
  	return b - a;
	});
	return numbers;
}

function getQuestionIndex(){
	//Multiply by 10 as only 10 questions for each of the operators
	return Math.floor(Math.random()*10);
}

// Display a question from the arrays by using one of the random numbers generated from earlier to select
// a random question from the relevant array of predefined questions.
function updateDOM(numbers, operator, question){
	document.getElementById("number1_sum").innerHTML = numbers[0];
	document.getElementById("number2_sum").innerHTML = numbers[1];
	document.getElementById("operator").innerHTML = operator;
	document.getElementById("question").innerHTML = question;
}

/**Calculate the sum of the 2 random numbers that are generated
1- Display the calculation with the randomly generated numbers
2- Create a handle on the submit answer button
3- Do the calculation, then call the function to check the user's answer*/
function add(){
	var numbers  = generateNumbers();
	var index    = getQuestionIndex();
	var question = window.questions['add'](numbers)[index];

	updateDOM(numbers, '+', question);

	var answer = document.getElementById("submitAns");
	var correctAns = numbers[0] + numbers[1];
	answer.onclick =  function() {
		var userAns = document.getElementById("answer").value;
		checkUserAnswer("add", userAns, correctAns);
	}
	questionHelp("add", numbers);
}

/**Calculate the subtraction of the 2 random numbers that are generated
1- Display the calculation with the randomly generated numbers
2- Create a handle on the submit answer button
3- Do the calculation, then call the function to check the user's answer*/
function minus(){
	//s[0] To make the subtraction easier, we want the first number to be bigger than the second.
	var numbers  = generateNumbers();
	var index    = getQuestionIndex();
	var question = window.questions['minus'](numbers)[index];

	updateDOM(numbers, '-', question);

	var answer = document.getElementById("submitAns");
	answer.onclick =  function() {
		var userAns = document.getElementById("answer").value;
		var correctAns = numbers[0] - numbers[1];
		checkUserAnswer("minus", userAns, correctAns);
	}
	questionHelp("minus", numbers);
};


/**Calculate the sum of the 2 random numbers that are generated
1- Display the page numbers randomly generated
2- Create a handle on the submit answer button
3- Do the calculation, then call the function to check the user's answer*/
function multiply(){
	var numbers  = generateNumbers();
	var index    = getQuestionIndex();
	var question = window.questions['multiply'](numbers)[index];

	updateDOM(numbers, 'x', question);

	var answer = document.getElementById("submitAns");
	answer.onclick =  function() {
		var userAns = document.getElementById("answer").value;
		var correctAns = numbers[0] * numbers[1];

		checkUserAnswer("multiply", userAns, correctAns);
	}
	questionHelp("multiply", numbers);
};


/**Calculate the division calculation of the 2 random numbers that are generated
1- Display the page numbers randomly generated
2- Create a handle on the submit answer button
3- Do the calculation, then call the function to check the user's answer*/
function divide(){

	var numbers  = generateNumbers();
	var index    = getQuestionIndex();
	var question = window.questions['multiply'](numbers)[index];

	//\xF7 hexadecimal for divide sign
	updateDOM(numbers, '\xF7', question);

	var answer = document.getElementById("submitAns");
	answer.onclick =  function() {
		var userAns = document.getElementById("answer").value;

		//Round the division for simplicity for 5-7 year olds, you want to return the largest equal share of the sum
		// Doesn't deal with the remainder
		var correctAns = Math.floor(numbers[0] / numbers[1]);
		checkUserAnswer("divide", userAns, correctAns);
	}
	questionHelp("divide", numbers);
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
		document.getElementById("answer").value = "";
	}
	else if (parseInt(userAns) != correctAns)
	{
		//count++;
		messageBox("Sorry that is the incorrect answer. Please try again.");
		document.getElementById("answer").value = "";
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

	closeMsgBox.onclick =  function() {
		bckgrdMsg.style.display = 'none';
	}
}

/*This will help to provide a visual representation of the question*/
function questionHelp(sign, numbers)
{
	var hint = document.getElementById("help");

	hint.onclick =  function() {
		var counter="";
		var counter2="";
		var imageSrc = '<img src="star.png" alt="Apple image" width="30" height="40" />'
		var imageArray = [];

		if(sign ==="add" || sign === "minus") {
			for(var i=0; i<numbers[0]; i++){
				 counter = imageSrc + counter;
			}
			for(var i=0; i<numbers[1]; i++){
				 counter2 = imageSrc + counter2;
			}
			document.getElementById("helpImage1").innerHTML = counter;
			document.getElementById("helpImage2").innerHTML = counter2;
		}
		else if(sign ==="multiply"){
			var starWidth = numbers[0] * 45;
			var starHeight = numbers[1] * 50;
			var starBox = document.getElementById("stars");
			starBox.style.width = starWidth + "px";
			starBox.style.height = starHeight + "px";
			starBox.style.display = 'block';
		}
		else {
			//For division
			var correctAns = Math.floor(numbers[0] / numbers[1]);
			var starWidth = correctAns * 45;
			var starHeight = numbers[1] * 50;
			var starBox = document.getElementById("stars")
			starBox.style.width = starWidth + "px";
			starBox.style.height = starHeight + "px";
			starBox.style.display = 'block';
		}
	}
}

// Call the generate the random numbers as soon as the page is open
generateNumbers();
