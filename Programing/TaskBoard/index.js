const DOM = {
   noteDetails: null,
   date: null,
   time: null,
   ordersTableBody: null,
 };

 let notes = [];

function init() {
  DOM.noteDetails = document.querySelector("#noteDetails");
  DOM.date = document.querySelector("#date");
  DOM.time = document.querySelector("#time");

  DOM.ordersTableBody = document.querySelector("#ordersTable tbody");

  const addNewOrderButton = document.querySelector("#addNewOrderButton");
  addNewOrderButton.addEventListener("click", addNewNote);

  const clearTableButton = document.querySelector("#clearTable");
  clearTableButton.addEventListener("click", clearNotesArray);

 
  function addNewNote(event) {
    // console.log(event); // event
    // console.log(this); // button!
    notes.push(new Note(DOM.noteDetails.value, DOM.date.value, DOM.time.value));
    drawNotes(notes);
    clearForm();
  }
}

function clearNotesArray() {
  clearTableViewFn();
  notes.splice(0, notes.length);
}


function clearTableViewFn() {
  DOM.ordersTableBody.innerHTML = "";
}

function clearForm() {
  DOM.noteDetails.value = "";
  DOM.date.value = "";
  DOM.time.value = "";
}
 

function drawNotes(notesArray) {
  if (Array.isArray(notesArray) === false) return;
  // document.createElement!
  // DOM.ordersTableBody.append
  // DOM.ordersTableBody > tr > td,td,td,td

  clearTableViewFn();
  for (let index = 0; index < notesArray.length; index++) {
    
    const currentOrder = notesArray[index];

    // create row
    const tableRow = document.createElement("tr");
    
    // create noteDetails column
    const tdNoteDetails = document.createElement("td");
    tdNoteDetails.innerText = currentOrder.noteDetails;

    // create date column
    const tdDate = document.createElement("td") ;
    tdDate.innerText = currentOrder.date;

    // create hour column
    const tdTime = document.createElement("td") ;
    tdTime.innerText = currentOrder.time;

    const tdActions = document.createElement("td");
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("btn", "btn-danger");
    buttonDelete.innerText = "X";
    tdActions.append(buttonDelete);
    buttonDelete.addEventListener("click", function () {
      notes.splice(index, 1);
      drawNotes(notes);
    });


    tableRow.append(tdNoteDetails, tdDate, tdTime ,tdActions); // tr>td,td,td,td
    DOM.ordersTableBody.append(tableRow); //table > tbody > tr
  }
}

init ();
  