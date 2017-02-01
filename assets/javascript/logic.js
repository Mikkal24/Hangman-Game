// //GAME VARIABLES
// var lives = 10;
var correctGuesses = 0;
//pick a random word to convert to an array
//we'll use preset ones for now
var game0 = "ZELDA";
var game1 = "MARIO";
var game2 = "SOLIDSNAKE";
var game3 = "SAMUS";
var game4 = "GODOFWAR";
var game5 = "SKYRIM";
var game6 = "LEAGUEOFLEGENDS";
var game7 = "DARKSOULS";
var game8 = "BATTLEFIELD";
var game9 = "SUPERSMASHBROTHERS";

var collection = [game0,game1,game2,game3,game4,game5,game6,game7,game8,game9];
// var wordOfChoice = collection[(Math.floor(Math.random()*collection.length))];
// //output word to console for cheating purposes
// console.log(wordOfChoice);

// //convert that string into an array
// var wordArray = wordOfChoice.split("");
// console.log(wordArray);

// //generate array of blanks depending on how long the words is
// for(var i=0;i<wordArray.length;i++){
// 	appendUl();
// }

// //create a global variable to store an array of selected characters
// var pastInput = [];

var myLogic = new logic();
var updater = new update();
reset(); 	
//main event handler
function testFunction(event){
	var pressedKey = event.keyCode; //you can use .key to just get the lowercase key
	var convertedKey = String.fromCharCode(pressedKey);
	if(myLogic.isValidGuess(pressedKey)){
		//console log
		console.log(convertedKey);
		pastInput.push(pressedKey);
		//compare
		if(myLogic.compareInput(convertedKey)){
			console.log("YOU GUESSED CORRECTLY!");
		}
	}
	
}

//compare input
// function compareInput(guess){
// 	var match = false;
// 	for(var i = 0;i<wordArray.length;i++){
// 		if(guess===wordArray[i]){
// 			match=true;
// 			addToList(guess,i);
// 			correctGuesses++;
// 		}
// 	}
// 	if(match===false){
// 		addtoWrongList(guess);
// 		lives--;
// 		document.getElementById("lives").innerHTML = lives;
// 		if(lives<1){
// 			reset();
// 		}
// 	}

// 	//check if player won
// 	var nodeList = Array.prototype.slice.call( document.getElementById('blankArray').children );
// 	var matchOver = true;
// 	for(var i=0;i<nodeList.length;i++){
// 		if(nodeList[i].innerHTML===" "){
// 			matchOver = false;
// 		}
// 	}
// 	if(matchOver){
// 		reset();
// 	}
// 	return match;
// }

//modify html
// function addToList(guess, arrayPosition){
// 	var nodeList = Array.prototype.slice.call( document.getElementById('blankArray').children );
// 	nodeList[arrayPosition].innerHTML=guess;

// }
// function isValidGuess(guess){
// 	var isValid = false;
// 	if((guess>64)&&(guess<91)){
// 		isValid=true;
// 	} 

// 	for(var i=0;i<pastInput.length;i++){
// 		if(guess===pastInput[i]){
// 			isValid=false;
// 		}
// 	}
// 	return isValid;
// }
//modify html
// function addtoWrongList(guess){
// 	var ul = document.getElementById("guessArray");
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(guess));
// 	ul.appendChild(li);
// }
// //modify html
// function appendUl() {
//   var ul = document.getElementById("blankArray");
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(" "));
//   ul.appendChild(li);
// }




//logic object
function logic(){
	this.compareInput = function(guess){
		var match = false;
		for(var i = 0;i<wordArray.length;i++){
			if(guess===wordArray[i]){
				match=true;
				updater.addToList(guess,i);
				correctGuesses++;
			}
		}
		if(match===false){
			updater.addtoWrongList(guess);
			lives--;
			document.getElementById("lives").innerHTML = lives;
			if(lives<1){
				reset();
			}
		}

		//check if player won
		var nodeList = Array.prototype.slice.call( document.getElementById('blankArray').children );
		var matchOver = true;
		for(var i=0;i<nodeList.length;i++){
			if(nodeList[i].innerHTML===" "){
				matchOver = false;
			}
		}
		if(matchOver){
			reset();
		}
		return match;
	}
	
	this.isValidGuess=function(guess){
		var isValid = false;
		if((guess>64)&&(guess<91)){
			isValid=true;
		} 

		for(var i=0;i<pastInput.length;i++){
			if(guess===pastInput[i]){
				isValid=false;
			}
		}
		return isValid;
	}
}

//html handler object
function update(){
	this.addtoWrongList=function(guess){
		var ul = document.getElementById("guessArray");
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(guess));
		ul.appendChild(li);
	}
	this.addToList=function(guess, arrayPosition){
		var nodeList = Array.prototype.slice.call( document.getElementById('blankArray').children );
		nodeList[arrayPosition].innerHTML=guess;
	}
	//modify html
	this.appendUl=function() {
  		var ul = document.getElementById("blankArray");
  		var li = document.createElement("li");
  		li.appendChild(document.createTextNode(" "));
  		ul.appendChild(li);
	}
}


//the reset function
function reset(){
	lives = 10;
	//empty both lists
	document.getElementById("blankArray").innerHTML="";
	document.getElementById("guessArray").innerHTML="";
	//select a new word
	wordOfChoice = collection[(Math.floor(Math.random()*collection.length))];
	wordArray = wordOfChoice.split("");
	for(var i=0;i<wordArray.length;i++){
			updater.appendUl();
	}

	pastInput=[];

	if(wordOfChoice==="MARIO"){
		document.getElementById("victim").src="https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png";
	}else if (wordOfChoice==="SAMUS"){
		document.getElementById("victim").src="http://orig14.deviantart.net/f377/f/2010/232/5/b/samus_aran_by_shawnthehedgehog.png";
	}else if (wordOfChoice==="SOLIDSNAKE"){
		document.getElementById("victim").src="http://vignette3.wikia.nocookie.net/metalgear/images/1/1a/SolidSnake.png/revision/latest/scale-to-width-down/148?cb=20100522112721";
	} else if(wordOfChoice==="ZELDA"){
		document.getElementById("victim").src="assets/images/zelda_victim.png";
	} else if(wordOfChoice==="GODOFWAR"){
		document.getElementById("victim").src="http://vignette3.wikia.nocookie.net/vsbattles/images/2/2a/Kratos_Render.png/revision/latest?cb=20160102220800";
	} else if(wordOfChoice==="SKYRIM"){
		document.getElementById("victim").src="http://pngimg.com/upload/dragon_PNG994.png";
	} else if(wordOfChoice==="LEAGUEOFLEGENDS"){
		document.getElementById("victim").src="http://img15.deviantart.net/5f89/i/2015/108/6/a/wip_bio___summoner_sona_by_kagaminemix-d781k2v.png";
	} else if(wordOfChoice==="DARKSOULS"){
		document.getElementById("victim").src="https://s-media-cache-ak0.pinimg.com/originals/f3/6b/6b/f36b6b6e661920cbca9ada6fa256a56c.png";
	} else if(wordOfChoice==="BATTLEFIELD"){
		document.getElementById("victim").src="https://d34ymitoc1pg7m.cloudfront.net/bf4/loggedout/alwayson-soldier-ebf6dd2b.png";
	} else if(wordOfChoice==="SUPERSMASHBROTHERS"){
		document.getElementById("victim").src="http://img3.wikia.nocookie.net/__cb20130806195710/videogames-fanon/images/f/f3/SmashBall.png";
	}
	
}

