let notes = [];
let currentNoteId = null;




function displayNotes() {
    const noteList = document.getElementById("note-list");
    noteList.innerHTML = "";

    notes.forEach((note) => {
        const listItem = document.createElement("li");
        listItem.className = "note-item";
        listItem.textContent = note.title || note.text.substring(0, 20) + "...";
        listItem.onclick = () => displayNoteDetails(note.id);

        noteList.appendChild(listItem);
    });

    updateNoteCount();
}

function updateNoteCount() {
    const noteCountElement = document.getElementById("note-count");
    noteCountElement.textContent = `Ai ${notes.length} notițe`;
}

function displayNoteDetails(noteId) {
    const selectedNote = notes.find((note) => note.id === noteId);

    if (selectedNote) {
        document.getElementById("note-title").textContent = selectedNote.title || "Notiță Nouă";
        document.getElementById("note-date").textContent = `Data: ${selectedNote.date || getCurrentDate()}`;
        document.getElementById("note-id").textContent = selectedNote.id;
        document.getElementById("note-text").value = selectedNote.text || "";
        currentNoteId = noteId;
    }
}

function createNote() {
    const newNote = {
        id: generateUniqueId(),
        title: "",
        text: "",
        date: getCurrentDate(),
    };

    notes.push(newNote);
    displayNotes();
    displayNoteDetails(newNote.id);
}

function saveNote() {
    const title = document.getElementById("note-title").textContent;
    const text = document.getElementById("note-text").value;

    const currentNoteIndex = notes.findIndex((note) => note.id === currentNoteId);

    if (currentNoteIndex !== -1) {
        const newTitle = text.substring(0, 10) + "..." || "Notiță Nouă";
        
        notes[currentNoteIndex].title = newTitle;
        notes[currentNoteIndex].text = text;
        notes[currentNoteIndex].date = getCurrentDate();
        displayNotes();
    }
}
function deleteNote() {
    const currentNoteIndex = notes.findIndex((note) => note.id === currentNoteId);

    if (currentNoteIndex !== -1) {
        notes.splice(currentNoteIndex, 1);
        displayNotes();
        clearNoteDetails();
    }
}

function deleteAllNotes() {
    notes = [];
    displayNotes();
    clearNoteDetails();
}

function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toLocaleDateString();
}

function clearNoteDetails() {
    document.getElementById("note-title").textContent = "Notiță Nouă";
    document.getElementById("note-date").textContent = "Data: ";
    document.getElementById("note-id").textContent = "";
    document.getElementById("note-text").value = "";
    currentNoteId = null;
}

displayNotes();
