var game = false;
var randomnumber;
var red;
var green;
var blue;
var yellow;
var targetnumber = 0;
var currentnumber = 0;
var wins = 0;
var losses = 0;

//enter low end of range, and high end of range, changes randomnumber

$('#winning').html("Wins: " + wins);
$('#losing').html("Losses: " + losses);


function randomizer(x, y) {

	return randomnumber = Math.floor(Math.random() * (y-x) + x);
}

function begin() {

targetnumber = randomizer(40, 60);
red = randomizer(2, 15);
green  = randomizer(2, 15); 
blue = randomizer(2, 15);
yellow = randomizer(2, 15);
game = true;
currentnumber = 0;


$('#targetnumber').html(targetnumber);
$('#currentnumber').html(currentnumber);


console.log(red + 
	" " + blue + 
	" " + green + 
	" " + yellow);
console.log(targetnumber);
}


console.log(red + 
	" " + blue + 
	" " + green + 
	" " + yellow)
console.log(targetnumber)

// for (a=0;a<=1;a++){

// randomizer(5, 15);

// console.log("randomnumber" + randomnumber);

// }

$('#red').on('click', function() {
	if (game == true){
		currentnumber = currentnumber + red;
		console.log(currentnumber)
		updatecurrent();
	}
	
});

$('#blue').on('click', function() {
	if (game == true){
		currentnumber = currentnumber + blue;
		console.log(currentnumber)
		updatecurrent();
	}	
});

$('#green').on('click', function() {
	if (game == true){
		currentnumber = currentnumber + green;
		console.log(currentnumber)
		updatecurrent();
	}
});

$('#yellow').on('click', function() {
	if (game == true){
		currentnumber = currentnumber + yellow;
		console.log(currentnumber)
		updatecurrent();
	}
});

$('#begin').click(function() {
if (game==false){
	begin();
	console.log(currentnumber)
	updatecurrent();}
});

function updatecurrent(){

	$('#currentnumber').html(currentnumber);
	checker();

}

function checker(){

	if (currentnumber == targetnumber){
		alert("You Win!");
		game=false;
		wins = wins+1;
		begin();
	} else if (currentnumber > targetnumber){

		alert("YOU LOSE FOREVER!!!!!!");
		game=false;
		losses = losses+1;
		begin();
	}

	$('#winning').html("Wins: " + wins);
	$('#losing').html("Losses: " + losses);

 }
