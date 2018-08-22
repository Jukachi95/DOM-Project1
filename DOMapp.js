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

loadEventListeners();

function loadEventListeners(){
	form.addEventListener("submit", addTask);
}

function addTask(e){

e.preventDefault();

if(taskInput.value === " "){
	alert("You must enter a task");

}

// Create Li Element
const li = documument.createElement("li");
li.className = 'collection-item';

// Create Text Node
li.appendChild(document.createTextNode(taskInput.value))

}