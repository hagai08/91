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

	let notesElm = document.getElementById("notes");

	if (notesObj.length == 0) 
	{
		notesElm.innerHTML = `Nothing to show!
		Use "Add a Note" section above to add notes.`;
	}
	else
	{
		notesElm.innerHTML = "";

		for (let index = 0; index < notesObj.length; index++) {
		
			const element = notesObj[index];
			// console.log(element.text);
			let note =  BuildNote(index, element);
			notesElm.appendChild(note);
		}
	}
}

function BuildNote(index, element) {
	const noteDiv = document.createElement("div");
	noteDiv.classList.add("fade-in-image");
  
	const noteCardDiv = document.createElement("div");
	noteCardDiv.classList.add("noteCard", "my-2", "mx-2", "card");
	noteCardDiv.id = "blablabla";
  
	const deleteButtonDiv = document.createElement("div");
	deleteButtonDiv.id = "dlt";
  
	const deleteButton = document.createElement("button");
	deleteButton.id = index;
	deleteButton.onclick = function() {
	  deleteNote(this.id);
	};
	deleteButton.classList.add("btn", "btn-primary");
	deleteButton.innerText = "X";
  
	const cardBodyDiv = document.createElement("div");
	cardBodyDiv.classList.add("card-body");
  
	const cardTitle = document.createElement("h5");
	cardTitle.classList.add("card-title");
	cardTitle.innerText = `Note ${index + 1}`;
  
	const blaDiv = document.createElement("div");
	blaDiv.classList.add("bla");
  
	const cardText = document.createElement("p");
	cardText.classList.add("card-text");
	cardText.innerText = `${element.text}\n\n${element.date}\n${element.time}`;
  
	blaDiv.appendChild(cardText);
	cardBodyDiv.appendChild(cardTitle);
	cardBodyDiv.appendChild(blaDiv);
	deleteButtonDiv.appendChild(deleteButton);
	noteCardDiv.appendChild(deleteButtonDiv);
	noteCardDiv.appendChild(cardBodyDiv);
	noteDiv.appendChild(noteCardDiv);
  
	return noteDiv;
  }

// Function to delete a note
function deleteNote(index) {
	let notes = localStorage.getItem("notes");
	let notesObj = GetNotesObj(notes);

	notesObj.splice(index, 1);
	localStorage.setItem("notes", JSON.stringify(notesObj));

	showNotes();
}
