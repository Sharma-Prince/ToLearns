document.addEventListener('DOMContentLoaded', (event) => {
    loadNote();
    displaySavedNotes();
});

function saveNote() {
    const note = document.getElementById('noteArea').value;
    if (note) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        document.getElementById('noteArea').value = '';  // Clear textarea after saving
        displaySavedNotes();
        alert('Note saved!');
    }
}

function loadNote() {
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
        document.getElementById('noteArea').value = savedNote;
    }
}

function displaySavedNotes() {
    const notesContainer = document.getElementById('savedNotesContainer');
    notesContainer.innerHTML = '';
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'saved-note';
        noteElement.innerText = note;
        notesContainer.appendChild(noteElement);
    });
}
