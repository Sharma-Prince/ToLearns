let pages = JSON.parse(localStorage.getItem('pages')) || [];
let currentPageIndex = null;

document.addEventListener('DOMContentLoaded', () => {
    loadPages();
});

function createNewPage() {
    const pageTitle = prompt('Enter page title:');
    if (pageTitle) {
        pages.push({ title: pageTitle, notes: [] });
        localStorage.setItem('pages', JSON.stringify(pages));
        loadPages();
    }
}

function loadPages() {
    const pageList = document.getElementById('pageList');
    pageList.innerHTML = '';
    pages.forEach((page, index) => {
        const li = document.createElement('li');
        li.innerText = page.title;
        li.onclick = () => selectPage(index);
        pageList.appendChild(li);
    });
}

function selectPage(index) {
    currentPageIndex = index;
    const pageTitle = document.getElementById('pageTitle');
    pageTitle.innerText = pages[index].title;
    loadNotes();
}

function loadNotes() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = '';
    const notes = pages[currentPageIndex].notes;
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.innerText = note.substring(0, 20) + '...'; // Display first 20 characters
        li.onclick = () => displayNoteContent(note);
        noteList.appendChild(li);
    });
}

function openNotePopup() {
    document.getElementById('notePopup').style.display = 'flex';
}

function closeNotePopup() {
    document.getElementById('notePopup').style.display = 'none';
    document.getElementById('noteContent').value = '';
}

function saveNote() {
    const noteContent = document.getElementById('noteContent').value;
    if (noteContent && currentPageIndex !== null) {
        pages[currentPageIndex].notes.push(noteContent);
        localStorage.setItem('pages', JSON.stringify(pages));
        closeNotePopup();
        loadNotes();
    }
}

function displayNoteContent(note) {
    alert(note); // Simple way to display note content, can be improved
}
