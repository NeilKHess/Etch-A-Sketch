let sideLen = function returnText(){document.getElementById("sideLenText").value;
}


const gridArea = document.querySelector('#gridArea'); 

const divBox = document.createElement("div");
divBox.innerHTML = "X";
divBox.style.width = "10px";
divBox.style.height = "10px";
divBox.style.background = "green";
divBox.style.margin = "5px";
divBox.style.display = "inline-block";
divBox.classList.add("oneSquare");


let divGen = function(sideLen){
    for (i = 0; i < sideLen; i++) gridArea.appendChild(divBox)}

divGen(4);