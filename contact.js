window.onload = function load () {
    loadTable();
}

var totalEntries = localStorage.length;

function submit() {
    
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;

    // var newEntry = {
    //     newName: name,
    //     newMessage: message
    // }

    let date = new Date();
    let localDate = date.toLocaleDateString();
    let localTime = date.toLocaleTimeString();
    let newDate = localDate + ' @ ' + localTime;


    localStorage.setItem('📅' + newDate, ['💌: '+ message + '<br>' +   ' ❤️: ' + name]);
    // localStorage.setItem('📅' + new Date(), [newEntry.newName, newEntry.newMessage]);
    // localStorage.setItem('📅' + new Date(), newEntry);
    // localStorage.setItem('📅' + new Date(), {name: name, message: message});


    location.reload();
}

function loadTable() {

    for (var i in localStorage){
        var table = document.getElementById('guestbook');    
            if (i.startsWith('📅')){
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = i; //Timestamp
            var cell2 = row.insertCell(1);
            cell2.innerHTML = localStorage[i];
        }  
    }
}

function deleteLocalStorage() {
    localStorage.clear();
    location.reload();
}