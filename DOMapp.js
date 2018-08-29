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

// Load event listener
loadAllEventListener();


// Function for loading event listeners
function loadAllEventListener(){

form.addEventListener("submit", addTask)

// Remove individual tasks
taskList.addEventListener("click", removeTask)

// Clear task button
clearBtn.addEventListener("click", clearTask)
}

// Add Task

function addTask(e){
	if(taskInput.value === ""){
		alert("Please enter a value");
	}

	// Create Li Element
	const li = document.createElement("li");

	// Give Li a class
	li.className = "collection-item";

	// Add text to li
	li.appendChild(document.createTextNode(taskInput.value));

	// Create a element
	const link = document.createElement("a");

	// Give a element class name
	link.className = "delete-item secondary-content"

	// Add text for link
	link.innerHTML = '<i class = "fa fa-remove"></i>'

	// Append link to li
	li.appendChild(link);

	// Append li to ul
	taskList.appendChild(li);

	// Clear Input
	taskInput.value = '';


	e.preventDefault();
}

// Remove Tasks

function removeTask(e){
	if(e.target.parentElement.classList.contains('delete-item')){
	if(confirm("Are You Sure?")){
		e.target.parentElement.parentElement.remove();
	}
	}
}

// Clear Tasks
function clearTask(){

taskList.innerHTML = ''


}