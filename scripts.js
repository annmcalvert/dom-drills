let list = document.createElement('ul');

let div = document.createElement('div');
div.setAttribute("class", "header-container");
let header1 = document.createElement('h1');
header1.setAttribute("class", "h1");
let headerTextH1 = document.createTextNode('This is an h1');
let header2 = document.createElement('h2');
header2.setAttribute("class", "h2");
let headerTextH2 = document.createTextNode('This is an h2');
let header3 = document.createElement('h3');
header3.setAttribute("class", "h3");
let headerTextH3 = document.createTextNode('This is an h3');
let header4 = document.createElement('h4');
header4.setAttribute("class", "h4");
let headerTextH4 = document.createTextNode('This is an h4');
let header5 = document.createElement('h5');
header5.setAttribute("class", "h5");
let headerTextH5 = document.createTextNode('This is an h5');
let header6 = document.createElement('h6');
header6.setAttribute("class", "h6");
let headerTextH6 = document.createTextNode('This is an h6');



header1.appendChild(headerTextH1);
div.appendChild(header1);
header2.appendChild(headerTextH2);
div.appendChild(header2);
header3.appendChild(headerTextH3);
div.appendChild(header3);
header4.appendChild(headerTextH4);
div.appendChild(header4);
header5.appendChild(headerTextH5);
div.appendChild(header5);
header6.appendChild(headerTextH6);
div.appendChild(header6);


let changeColor = ["blue", "green", "yellow", "orange", "red", "purple", "black", "grey"];
let randomColor = changeColor[Math.ceil(Math.random() * changeColor.length) - 1];


//changes color when header1 is clicked
header1.addEventListener('dblclick', function () {
    div.getElementsByClassName("h1")[0].style.color = randomColor;
})








window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(div);
    document.body.appendChild(list);

    let btn = document.getElementsByClassName("btn")[0];
    

    //started at step 11
    btn.addEventListener("click", function () {
        let li = document.createElement('li');
        let liText = document.createTextNode(`This is list item ${list.childElementCount + 1}`);
        li.appendChild(liText);
        list.appendChild(li);

    })
})