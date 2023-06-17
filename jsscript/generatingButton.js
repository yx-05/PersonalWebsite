const buttonContainer = document.getElementById("buttonContainer");

function elementFromHtml(html){
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

const button = elementFromHtml(`<div>button</div>`);

buttonContainer.appendChild(button);