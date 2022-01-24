var a = "Hot water will turn into ice faster than cold water";
var b = "A group of porcupines is called a prickle";
var c = "When the moon is directly overhead, you will weigh slightly less.";
var d = "Humans are the Only Animals That Enjoy Spicy Foods";
var e = "A crocodile cannot stick its tongue out.";

document.querySelector('#facta').addEventListener("click",showFactA);
function showFactA(){
	document.getElementById('factbox').innerHTML = "<h1>" + a + "</h1>" + "<img src= 'images/ice.jpeg' alt='ice'>";
}

document.querySelector('#factb').addEventListener("click",showFactB);
function showFactB(){
	document.getElementById('factbox').innerHTML = "<h1>" + b + "</h1>" + "<img src= 'images/porcupine.jpeg' alt='prickle'>";
}

document.querySelector('#factc').addEventListener("click",showFactC);
function showFactC(){
	document.getElementById('factbox').innerHTML = "<h1>" + c + "</h1>" + "<img src= 'images/moon.jpeg' alt='moon'>";
}

document.querySelector('#factd').addEventListener("click",showFactD);
function showFactD(){
	document.getElementById('factbox').innerHTML = "<h1>" + d + "</h1>" + "<img src= 'images/spicy.jpeg' alt='spicy'>";;
}

document.querySelector('#facte').addEventListener("click",showFactE);
function showFactE(){
	document.getElementById('factbox').innerHTML = "<h1>" + e + "</h1>" + "<img src= 'images/crocodile.jpeg' alt='crocodile'>";;
}

/*DARK THEME*/
document.querySelector('#theme1').addEventListener("click", showT1);

function showT1(){
	document.body.style.backgroundColor = "#2d2d2d";
	document.getElementById('factbox').style.backgroundColor = "#ababab";
	document.getElementById('factbox').style.color = "#ffffff";
	document.getElementById('factbox').style.borderColor = "#8d2663";
	
	var buttons = document.getElementsByTagName('input');
	for(var i = 0; i < buttons.length; i++){
		buttons[i].style.color = "#000000";
		buttons[i].style.backgroundColor = "#ababab";
	}
}

/*LIGHT THEME*/
document.querySelector('#theme2').addEventListener("click", showT2);

function showT2(){
	document.body.style.backgroundColor = "#fffefc";
	document.getElementById('factbox').style.backgroundColor = "#dedede";
	document.getElementById('factbox').style.color = "#5d5d5d";
	document.getElementById('factbox').style.borderColor = "#7070FF";
	
	var buttons = document.getElementsByTagName('input');
	for(var i = 0; i < buttons.length; i++){
		buttons[i].style.color = "##5d5d5d";
		buttons[i].style.backgroundColor = "#dedede";
	}
}


/*JUNGLE THEME*/
document.querySelector('#theme3').addEventListener("click", showT3);

function showT3(){
	document.body.style.backgroundColor = "#457353";
	document.getElementById('factbox').style.backgroundColor = "#FFC18C";
	document.getElementById('factbox').style.color = "#563232";
	document.getElementById('factbox').style.borderColor = "#DA6D42";
	
	var buttons = document.getElementsByTagName('input');
	for(var i = 0; i < buttons.length; i++){
		buttons[i].style.color = "#84240C";
		buttons[i].style.backgroundColor = "#DA6D42";
	}
}


