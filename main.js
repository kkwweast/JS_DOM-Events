console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").textContent = "I used the getElementById("node1") method to access this

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2 = document.getElementsByClassName("node2")
node2[0].textContent = 'I used the getElementByClassName("node2") method to acces this';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const node2 = document.getElementsByTagName("h3");
for (let i = 0; i < h3Tags.length; i++) {
    h3Tags[i].textContent = 'I used the getElementBytagName("h3") method to access all of these';
    
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using th
const myPara = document.createElement("p");



// TODO: Append the created node to the parent node using the element.appendChild() method
const parentDiv = document.querySelector("#parent");
console.log(parentDiv);
parentDiv.appendChild(myPara);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const myAnchor = document.createElement("a");
myAnchor.textContent = "I am an <a> tag";
// BONUS: Add a link href to the <a>
myAnchor.href = "http://truecoders.io";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parentDiv.insertBefore(myAnchor, myPara);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/
const newChildPara = document.createdElement("p");
newChildPara.textContent = "New"
// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const parent = document.getElementById("exercise-container3");
const nodeToReplace = document.getElementById("N1");
// TODO: Remove the "New Child Node"
setTimeout(() =>  {
    newChildPara.remove();
}, 2500);
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
const groceryUL = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
list.forEach((grocery, index, array ) => {
    const newLI = document.createElement("li");
    newLI.textContent = grocery;
}

);
// TODO: Append the new list items to the unordered list element
  groceryUL.append(newLI);
// TODO: Append the unordered list to the `div#container` under exercise 4 
document.getElementById("container").append(groceryUL);
document.querySelector("#conrainer").append(groceryUL);
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
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