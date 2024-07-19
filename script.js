function loadContent(page) {
    const content = document.getElementById('content');
    let html = '';

    switch(page) {
        case 'page1':
            html = `
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Page 1</h1>
                </div>
                <p>This is the content for page 1.</p>
                <pre><code>console.log('Hello, World!');</code></pre>
            `;
            break;
        case 'page2':
            html = `
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Page 2</h1>
                </div>
                <p>This is the content for page 2.</p>
                <pre><code>let x = 10;
let y = 20;
let sum = x + y;
console.log(sum);</code></pre>
            `;
            break;
        case 'page3':
            html = `
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Page 3</h1>
                </div>
                <p>This is the content for page 3.</p>
                <pre><code>function greet(name) {
    return 'Hello ' + name + '!';
}

console.log(greet('Alice'));</code></pre>
            `;
            break;
        default:
            html = `
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Welcome to the Learning Website</h1>
                </div>
                <p>Select a page from the sidebar to display its content.</p>
            `;
    }

    content.innerHTML = html;
}
