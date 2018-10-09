let div = document.createElement('div.header-container');
let header = document.createElement('h1');
let headerText = document.createTextNode('This is an h1');

header.appendChild(headerText);
div.appendChild(header);

window.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild(div);
})