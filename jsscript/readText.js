const textArea = document.getElementById("textarea")

fetch('/articles/yx01.txt')
  .then(response => response.text())
  .then(text => textArea.innerText = text)