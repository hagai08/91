showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", AddNote);

function AddNote() {
	let addTxt = document.getElementById("addTxt");
	let date = document.getElementById("date");
	let time = document.getElementById("time");

	let notes = localStorage.getItem("notes");
	let notesObj = GetNotesObj(notes);

	notesObj.push(new Note(addTxt.value, date.value, time.value));
	localStorage.setItem("notes", JSON.stringify(notesObj));

	addTxt.value = "";
	showNotes();
}

let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function (e) {
	let notes = localStorage.getItem("notes");

	let notesObj = GetNotesObj(notes);
	notesObj.splice(0, notesObj.length);

	localStorage.setItem("notes", JSON.stringify(notesObj));
	showNotes();
});

function GetNotesObj(notes) {
	if (notes == null)
		return new Array();
	else
		return JSON.parse(notes);
}

// Function to show elements from localStorage
function showNotes() {
	let notes = localStorage.getItem("notes");
	let notesObj = GetNotesObj(notes);

	let html = "";
	for (let index = 0; index < notesObj.length; index++) {
		
		const element = notesObj[index];
		// console.log(element.text);
		html += BuildNote(index, element);
		
	}

	let notesElm = document.getElementById("notes");

	if (notesObj.length != 0) notesElm.innerHTML = html;
	else
		notesElm.innerHTML = `Nothing to show!
		Use "Add a Note" section above to add notes.`;
}

function BuildNote(index, element) {
	return `<div class="noteCard my-2 mx-2 card"
				  style="width: 18rem;
				  background-color:yellow;">
				  		<div id="dlt">
						<button id="${index}" onclick=
							"deleteNote(this.id)"
							class="btn btn-primary">
							X
						</button>
						</div>
					  <div class="card-body">
						  <h5 class="card-title">
							  Note ${index + 1}
						  </h5>
						  <p class="card-text">
							  ${element.text}
							  <br>
							  <br>
							  ${element.date}
							  <br>
							  ${element.time}
						  </p>
	  
					  
				  </div>
			  </div>`;
}

// Function to delete a note
function deleteNote(index) {
	let notes = localStorage.getItem("notes");
	let notesObj = GetNotesObj(notes);

	notesObj.splice(index, 1);
	localStorage.setItem("notes", JSON.stringify(notesObj));

	showNotes();
}
