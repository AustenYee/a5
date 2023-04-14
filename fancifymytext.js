function fancifymytext() {
  return alert("Hello, world!");
}
function increaseTextSize() {
  document.getElementById("textArea").style.fontSize = "24pt";
}

function applyStyles() {
  var styleRadio = document.getElementsByName("style");
  if (styleRadio[0].checked) {
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    document.getElementById("textArea").style.textDecoration = "underline";
  } else if (styleRadio[1].checked) {
    document.getElementById("textArea").style.fontWeight = "normal";
    document.getElementById("textArea").style.color = "black";
    document.getElementById("textArea").style.textDecoration = "none";
  }
}
function moo() {
  var textInput = document.getElementById("textArea");
  var text = textInput.value;
  var words = text.split(" ");
  for (var i = 0; i < words.length; i++) {
    if (words[i].endsWith(".")) {
      words[i] = words[i].toUpperCase() + "-Moo";
    } else {
      words[i] = words[i].toUpperCase();
    }
  }
  textInput.value = words.join(" ");
}
