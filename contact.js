let name = document.getElementById('name');
let message = document.getElementById('message');
let table = document.getElementById('guestbook');


function submitEntry() {
    // console.log("Guestbook entry submitted");
    // console.log("input was" + input.value);
    // console.log("do something with input", input);
    localStorage.setItem(name.value, message.value);
    console.log(localStorage);
    let newRow = table.insertRow(-1);
    // let newCell = newRow.insertCell(0);
    // let newText = document.createTextNode('New bottom row');
    // newCell.appendChild(newText);
    newRow.innerHTML = localStorage[0];

};