const gridArea = document.querySelector('#gridArea'); 

const divBox = document.createElement("div");
divBox.innerHTML = "0";
divBox.classList.add("oneSquare");

let divGen = function(sideLen){
    for (i = 0; i < sideLen; i++) {gridArea.appendChild(divBox)}
}

divGen(5);