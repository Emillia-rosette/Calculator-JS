		//Emillia-rosette Nlandu
		//21/2/2018
		//Sparta Calculator
	//always thingk about your data first then that way you understand where you wanna go....
	document.addEventListener("DOMContentLoaded", function(event){

		//1) //declare variables to be used
		var num1 = 0; //initialise number to zero to be used as a condition
		var num2= 9;
		var operatorsL = true;

		//use of DOM manipulation
		var myButtons =  document.getElementsByClassName("buttonNum");
		var myOutput =   document.getElementById("screen");
		var myOperator = document.getElementsByClassName("operator");
		var myEqual =    document.getElementsByClassName("equals");
		var myClear =    document.getElementsByClassName("buttonClear");
		var reset = false;


		//console(buttonNum); //always use console log for testing
		//store numbers clicked //use console in each steps
function calculationMath(){
			var result = "";
		if (operatorsL == "+"){
			result = num1 + num2;
			//console.log(0+9);

		}else if(operatorsL =="*"){
			result = num1 * num2;
		}else if (operatorsL == "/"){
			result = num1 / num2;
		}else if(operatorsL == "-"){
			result = num1 - num2;
		}
			myOutput.innerHTML = result;

	}
		//2) add event listerners

		//get buttons on screen
		for (var i =0; i < myButtons.length; i++){

			myButtons[i].addEventListener("click", function(event){ // 4 parameters (events, )
				    //alert(myButtons);
				    //console.log(event.target.innerHTML); //targeting each button

				     if (num1 == 0){

				     	myOutput.innerHTML = event.target.innerHTML; //output clicked buttons on screen

				     	num1 = parseInt(event.target.innerHTML); //store button data or information
				     	operatorsL = true; //meaning when you click the buttons, the operators should be first
				     }else if(num2 == true){
				     		myOutput.innerHTML = event.target.innerHTML; //output clicked buttons on screen
				     		num2 = parseInt(event.target.innerHTML);
				     		//operatorsL = true;
				     }
				 });

		}

		//get operator button on screen
		for (var i =0; i < myOperator.length; i++){

			myOperator[i].addEventListener("click", function(event){
				//alert(myButtons);
				if (operatorsL == true){
					myOutput.innerHTML = event.target.innerHTML; //output clicked operators on screen
					operatorsL =event.target.innerHTML;
					num2 = true;
				}


				 });

		}
		//get equal button on screen

		/*for (var i =0; i < myEqual.length; i++){

			myEqual[i].addEventListener("click", function(event){
				//alert(myButtons);
				     myOutput.innerHTML = event.target.innerHTML; //output clicked equal sign on screen

				 });

		}*/
		myEqual[0].addEventListener("click", calculationMath)
			myOutput.innerHTML= event.target.innerHTML;
		//get clear button on screen

		/*for (var i =0; i < myClear.length; i++){

			myClear[i].addEventListener("click", function(event){
				//alert(myButtons);
				     myOutput.innerHTML = ""; //output clicked equal sign on screen

				 });

		}*/
		//the clear button doesnt need to be in a for loop because it is only one button so this way is better
		myClear[0].addEventListener("click", function(event){
			myOutput.innerHTML="Enter a Number";
			num1 = 0;
			operatorsL = false;
		});

	//var storeMyClicked = document.querySelectorAll("buttonNum");
	//var storeMyOperator = document.querySelectorAll("operator");


	////Tasks


	});
