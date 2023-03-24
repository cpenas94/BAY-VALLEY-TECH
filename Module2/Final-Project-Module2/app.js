// set variables for various elements of the page
const timer = document.getElementById('timer');
const total = document.getElementById('totalScore');
const words = document.getElementById('sampleWord');
const msg = document.querySelector('.correctOrWrong');
const input = document.getElementById('inputWords');

// An array of sample words
const sample =[
'yellow','succeed','cars','periodic',
'different','fluffy','natural','bare','bright',
'moldy','overrated','wriggle','shame','tramp',
'bell','disappear','sisters','bear',
'filthy','mourn','dangerous','uttermost',
'prevent','colorful'
];

// Sets the initial game level (seconds)
var level = 3;
let levelTime = level;
// Sets the initial code
let score=0;
// Sets the initial timer
let time = levelTime;
// Variable to track if the game is currently being played
let isPlaying;

// Start the game when the page loads
window.addEventListener('load',start);
// Event listener to the input field to check for typed words
input.addEventListener('input',check);

// Function for timer countdown and ends the game when time runs out
function countdown(){
	if(time>0){
		time--;
	}
	else if(time == 0){
		isPlaying = false;
		msg.style.visibility = 'visible';
		msg.innerHTML = 'Game Over';
}
timer.innerHTML = time;
}

// Check if the typed word matches the displayed word and update the score and timer accordingly
function check(){
	if(match()){
		time = levelTime + 1;
		score++;
		showWords(sample);
		isPlaying = true;
		input.value ='';
		msg.style.visibility='hidden';
	}else{
		isPlaying=false;
		msg.innerHTML = 'Game Over';
	}
	total.innerHTML = score;
}

// Check if the typed word matches the displayed word and return true or false accordingly
function match(){
	if(input.value === words.innerHTML){
		return true;
	}else{
		return false;
	}
}

// Randomly select and display a word from the array
function showWords(sample){
let random = Math.floor(Math.random() * sample.length);
words.innerHTML = sample[random];
}

// Initialize the game and start the timer
function start(){
	document.getElementById('gg').innerHTML = levelTime;
	total.innerHTML = 0;
	setInterval(countdown,1000);
	showWords(sample);
	if(!isPlaying){
		msg.innerHTML = 'Game Over';
	}
}