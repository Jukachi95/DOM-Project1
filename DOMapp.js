// alert("CONNECTED")

// function newNumber(){

// 	return Math.floor(Math.random()*20);
// }

// console.log(newNumber());



// Define UI

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners

loadEventListener();

// Load all event listeners
form.eventListener("submit", addTask);

function addTask(e){

	if(taskInput.value === " "){
		alert("Please Enter a task")

	}

	// Create an li
	const li = document.createElement("li");

	// Create an li class
	li.className = 'collection-item';

	// Create Text node for li
	li.appendChild(document.createTextNode(taskInput.value));

	// Create link
	const link = document.createElement("a");


	e.preventDefault();
}
