/*const buttonContainer = document.getElementById("buttonContainer");

function elementFromHtml(html){
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}



const button = elementFromHtml(`<div><a class="button" href="read.html">button</a><div>`);

buttonContainer.appendChild(button);

button.addEventListener('click', passCode());

function passCode(){
    localStorage.setItem("code", "yx01.txt");
}
*/

let listOfArticles = [];

fetch("/articles/articlesList.json")
.then(response => response.json())
.catch(error => console.log(error))
