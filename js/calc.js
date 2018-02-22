	//Emillia-rosette Nlandu
	//
	//Sparta Calculator

document.addEventListener("DOMContentLoaded", function(event){

	//declare variables to be used 
	var myButtons =  document.getElementsByClassName("buttonNum");
	var myOutput =   document.getElementById("screen");
	var myOperator = document.getElementsByClassName("operator");
	var myEqual =    document.getElementsByClassName("equals");
	var myClear =    document.getElementsByClassName("buttonClear");

	//get buttons on screen
	for (var i =0; i < myButtons.length; i++){

		myButtons[i].addEventListener("click", function(event){
			    //alert(myButtons);
			     myOutput.innerHTML = event.target.innerHTML; //output clicked buttons on screen

			 });

	}

	//get operator button on screen
	for (var i =0; i < myOperator.length; i++){

		myOperator[i].addEventListener("click", function(event){
			//alert(myButtons);
			     myOutput.innerHTML = event.target.innerHTML; //output clicked operators on screen

			 });

	}
	//get equal button on screen

	for (var i =0; i < myEqual.length; i++){

		myEqual[i].addEventListener("click", function(event){
			//alert(myButtons);
			     myOutput.innerHTML = event.target.innerHTML; //output clicked equal sign on screen

			 });

	}

	//get clear button on screen

	for (var i =0; i < myClear.length; i++){

		myClear[i].addEventListener("click", function(event){
			//alert(myButtons);
			     myOutput.innerHTML = event.target.innerHTML; //output clicked equal sign on screen

			 });

	}

//store numbers clicked //use console in each steps
//var storeMyClicked = document.querySelectorAll("buttonNum");
//var storeMyOperator = document.querySelectorAll("operator");

var storeMyClicked =[];



//store operators clicked
//store second if there is already first number in operator 
//run operation in all those things





	//addition operation 
	function addNum(num){

		var myNum = myButtons;



	}

	//multiplication operator 
	function multipleNum(){

	}
	//division operator 
	function divideNum(){

	}

	//substractor operator
	function substractNum(){

	}

	//equals /result/divident/
	function equalOperation2(){

	}
	});