const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
	if (inputBox.value === "") {
		alert("You must write something!");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span"); //same block
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";// user value to empty string
	saveData();
}

listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
			saveData();
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			saveData();
		}
	},
	false
);
function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


function clearList() {
	listContainer.innerHTML = "";
	localStorage.removeItem("data");
}
function changeBackground(image) {
	document.body.style.backgroundImage = `url(${image})`;
	localStorage.setItem("backgroundImage", image); // Save choice in local storage
}
window.onload = function () {
	const savedImage = localStorage.getItem("backgroundImage");
	if (savedImage) {
		document.body.style.backgroundImage = `url(${savedImage})`;
	}
};
