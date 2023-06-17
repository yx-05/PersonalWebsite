const textArea = document.getElementById("textarea")

text = "/articles/" + localStorage.getItem("code");

fetch(text)
  .then(response => response.text())
  .then(text => textArea.innerText = text)