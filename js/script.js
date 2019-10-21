console.log('Array of objects');

// an array containing dogs info
var dogs = [
	// First object of the array is contained within the square brackets and contained within a curly bracket
	{
		// variables inside an object are seperated with a comma
		name : 'Celia',
		id : 'jr101',
		breed : 'Jack Russell Terrior',
		color : 'white and brown',
		height : 40, // how tall in cm
		age : 16, // years old
		photo : 'assets/jackRussell.jpg',
		job : 'Ratter'
	},	// a comma goes at the end of the curly brackets to seperate each object
	{
		name : 'Jim',
		id : 'as101',
		breed : 'Australian Shepherd',
		color : 'White and Black',
		height : 60, //cm
		age : 5,
		photo : 'assets/australianShepherdDog.jpg',
		job : 'Rounding Dog'
	},
	{
		name : 'Steve',
		id : 'gr101',
		breed : 'Golden Retrever.jpg',
		color : 'Yellow',
		height : 70, //cm
		age : 3,
		photo : 'assets/goldenRetrever.jpg',
		job : 'Being the bestest of friends'
	},
	{
		name : 'Kyle',
		id : 'gh101',
		breed : 'Grey Hound',
		color : 'Black',
		height : 75, //cm
		age : 4,
		photo : 'assets/greyHound.jpg',
		job : 'Racing'
	},
	{
		name : 'Whip',
		id : 'wi101',
		breed : 'Whippet',
		color : 'Brown and White',
		height : 45, //cm
		age : 3,
		photo: 'assets/whippet.jpg',
		job : 'Racing'
	},
	{
		name : 'Jeffery',
		id : 'pg101',
		breed : 'Pug',
		color : 'Black',
		height : 35, //cm
		age : 5,
		photo : 'assets/pug.jpg',
		job : 'Dying slowly and painfully because \'they look cute\''
	} // The last array item does not need a comma at the end
];

// Calls the first photo from the array
document.getElementById('dogsContainer').innerHTML = '<h3 class="jumbotron col-12 bg-dark text-center">' + dogs[0].name + '</h3>' + '<img class="img-thumbnail" src="' + dogs[0].photo + '" alt="Dog"> <br>';

// --- Functions
// Function that clears the divs
function clear(){
	document.getElementById('dogsContainer').innerHTML = '';
	document.getElementById('dogsContainerNoStyle').innerHTML = '';
}
// A function that clears the field to change dog names
function fieldReset() {
	document.getElementById('oldName').value = '';
	document.getElementById('newName').value = '';
}

// Function stores all of the styling and displayed information for dogs being called on
function allDogs() {
	// Displays the dogs name on the left in a 'jumbotron'
	document.getElementById('dogsContainer').innerHTML += '<h3 class="jumbotron col-md-4 bg-dark text-center">' + dogs[i].name + '</h3>';
	// Displays an image of the dog itself
	document.getElementById('dogsContainer').innerHTML += '<img class="img-thumbnail col-md-4" src="' + dogs[i].photo + '"alt="Dog">';
	// Displays the remaining information about the dog taken from the array function
	document.getElementById('dogsContainer').innerHTML += '<ul class="jumbotron col-md-4 bg-custom">' +
	'<li><b>ID#:</b> ' + dogs[i].id + '</li>' + 
	'<li><b>Breed:</b> ' + dogs[i].breed + '</li>' + 
	'<li><b>Colour:</b> ' + dogs[i].color + '</li>' + 
	'<li><b>Height (cm):</b> ' + dogs[i].height + '</li>' +
	'<li><b>Age(Years): </b>' + dogs[i].age + '</li>' + 
	'<li><b>Job: </b>' + dogs[i].job + '</li>' +
	'</ul>';
}

// --- Shows all dogs listed in array
// Loop to call of the dogs from the array
/*
	* Will look for the variable 'dogs'
	* will count the length of the array
	* Will run for as long as the array is in length
	* Lists all images after the first
*/

// Function that is called to display all information about the dogs
document.getElementById('allDogs').addEventListener('click', function(){
	clear();
	// function for information about dogs being called
	for (i=0;i < dogs.length; i++) {
		allDogs();
	}
});

// --- Displays my personal dog
// Button to calls items from my array that are Jack Russell
document.getElementById('jackRussell').addEventListener('click', function(){
	clear();
	for(i=0; i < dogs.length; i++){
		if(dogs[i].breed === 'Jack Russell Terrior') {
			allDogs();
		}
	}
});

// --- Shows all large dogs
// Button that only shows tall dogs
document.getElementById('largeDog').addEventListener('click', function(){
	clear();
	for(i=0; i < dogs.length; i++){
		if(dogs[i].height >= 56) {
			allDogs();
		}
	}
});

// --- Button that shows all small dogs
document.getElementById('smallDog').addEventListener('click', function(){
	clear();
	for(i=0; i < dogs.length; i++){
		if(dogs[i].height < 55) {
			allDogs();
		}
	}
});

// --- Button to show all racing dogs
document.getElementById('racingDogs').addEventListener('click', function(){
	clear();
	document.getElementById('dogsContainer').innerHTML +='<h2 class="col-12">Racing Dogs</h2>'; 
	for(i=0; i < dogs.length; i++){
		// If the script finds a jack Russell in the array, it will display their name, id, image and other information displayed in the array
		if(dogs[i].job.indexOf('Racing') > (-1) ) {
			allDogs();
		}
	}
});

// --- Changing Dog's name
document.getElementById('changeName').addEventListener('click', function() {
	// Finds the inputted name by the user and stores it as variable
	var oldName = document.getElementById('oldName').value;
	// Uses new inputted name by the variable and stores it
	var newName = document.getElementById('newName').value;
	console.log(oldName, newName);
	// Loop used to go through array and find the matching old name
	for(var i = 0; i < dogs.length; i++) {
    	// If oldName variable matches another dog's in the data base
    	if (oldName === dogs[i].name){
    		// Dogs name is changed to the new inputted name
    		dogs[i].name = newName;
    	}
   	}
   	// Clears the fields for user to edit more names
   	fieldReset();
});