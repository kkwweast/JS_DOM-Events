console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
var node1 = document.getElementById('node1');
if (node1) {
    node1.textContent = 'I used the getElementById("node1") method to access this';
}
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
var node2List = document.getElementsByClassName('node2');
if (node2List.length > 0) {
    for (var i = 0; i < node2List.length; i++) {
        node2List[i].textContent = 'I used the getElementsByClassName("node2") method to access this';
    }
}

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

var h3Tags = document.getElementsByTagName('h3');
if (h3Tags.length > 0) {
    for (var j = 0; j < h3Tags.length; j++) {
        h3Tags[j].textContent = 'I used the getElementsByTagName("h3") method to access all of these'
    }}  

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using th
var parent = document.getElementById('parent'); // Replace 'parent' with the actual ID of the parent node

// TODO: Append the created node to the parent node using the element.appendChild() method
var paragraph = document.createElement('p');
paragraph.textContent = "This node was created using the createElement() method";
parent.appendChild(paragraph);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
var link = document.createElement('a');
link.textContent = "I am a <a> tag";
parent.insertBefore(link, paragraph);

// BONUS: Add a link href to the <a>
link.href = "http://truecoders.io";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parentDiv.insertBefore(myAnchor, myPara);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
var parentExercise3 = document.getElementById('exercise3'); // Replace 'exercise3' with the actual ID
var newParagraph = document.createElement('p');
newParagraph.textContent = "New Child Node";
parentExercise3.replaceChild(newParagraph, parentExercise3.childNodes[0]);
// TODO: Remove the "New Child Node"
newParagraph.remove();
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DO
let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

// TODO: Create an unordered list element
var ul = document.createElement('ul');
// TODO: Iterate over the array values, and create a list item element for each

list.forEach(function(item) {
    var li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});

// TODO: Append the new list items to the unordered list element
  groceryUL.append(newLI);


// TODO: Append the unordered list to the `div#container` under exercise 4 
var containerExercise4 = document.getElementById('container'); // Replace 'container' with the actual ID
containerExercise4.appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
function show() {
    //Creation
    const modalDiv = document.createElement("div");
    const ModalCard = document.createElement("div");
    const modalPara = document.createElement("p");
    const modalCloseBtn = document.createElement("button");
    //Modifications
}   modalPara.textContent = "Clicking the button triggers the one click event,whech the  JS function show()... which alerts the user";
    modalDiv.id = "modal";
    modalCard.classList.add("model-card");
    modalCloseBtn.textContent = "X";
    modalCloseBtn.addEventListner("click",() => {
       modalDiv.remove();
    });
    //Ataching the element to the page
    document.getElementByClassName("exercise5")[0].append(modalDiv);
    modalDiv.append(modalCard);
    modalCard.append(modalCloseBtn, modalPara);

//select a button
const createModalBtn = document.querySelector("#btn");
//give it a event Listner
//have listner invoke the show function
createModalBtn.addEventListener("click" ,show);

   // Function to display the modal
   function show() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}