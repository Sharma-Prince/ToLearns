function loadMarkdown(file) {
    fetch('content/' + file)
        .then(response => response.text())
        .then(text => {
            document.getElementById('content').innerHTML = marked(text);
        })
        .catch(error => {
            document.getElementById('content').innerHTML = 'Error loading content';
        });
}

// Optionally, load the first item by default
loadMarkdown('file1.md');
