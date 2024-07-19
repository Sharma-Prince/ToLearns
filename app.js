document.addEventListener('DOMContentLoaded', (event) => {
    loadNote();
});

function saveNote() {
    const note = document.getElementById('noteArea').value;
    localStorage.setItem('note', note);
    alert('Note saved!');
}

function loadNote() {
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
        document.getElementById('noteArea').value = savedNote;
    }
}
