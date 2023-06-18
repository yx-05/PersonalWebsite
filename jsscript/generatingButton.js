const buttonContainer = document.getElementById("buttonContainer");

function elementFromHtml(html){
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

function passCode(code){
    localStorage.setItem("code", String(code));
}

async function getJSONData(){
    const response = await fetch("/articles/articlesList.json");
    const jsonData = await response.json();

    for(let i in jsonData){
        const button = elementFromHtml(`<div><a class="button" id="` + jsonData[i]["code"] + `" href="read.html" onClick="passCode(this.id)">` + jsonData[i]["name"] + `</a><div>`);

        buttonContainer.appendChild(button);

        
    }

}

getJSONData();