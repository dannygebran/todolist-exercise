var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var unorderedelement = document.querySelector("ul");
var list = document.getElementById("mylist");
var listItems = document.getElementsByTagName("LI");








//get length of list - contribution from @Dan 
function listLength() {
 	console.log(listItems.length);
 	return listItems.length
 }










//determine value for input
function inputLength() {
	return input.value.length;
}










//TODO List 3 Main functions for event listeners
function createListElement() {
	var listelement = document.createElement("li");
		listelement.appendChild(document.createTextNode(input.value));
		unorderedelement.appendChild(listelement);
		input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}











//delete buttons - contribution from @Dan 
 for (i = 0; i < listLength(); i++ ) {
    var btn = document.createElement("button");
 		    btn.appendChild(document.createTextNode("Delete!"));
 		    listItems[i].appendChild(btn);
 		    btn.onclick = removeParent;
  	}








//Remove items - Added from another js file
function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

function checked(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("taskDone");
	}
}












// Event listeners 
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

mylist.addEventListener("click", checked);




