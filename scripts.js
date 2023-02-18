const gridArea = document.querySelector('#gridArea'); 
const gridBreak = document.createElement("br");
sideLen = "3"

let divGen = function(sideLen)
    {for (j = 0; j < sideLen; j++)  
        for (i = 0; i < sideLen; i++) {
            const divBox = document.createElement("div");
                divBox.innerHTML = "<div>O</div>";
                divBox.style.width = "15px";
                divBox.style.height = "15px";
                divBox.style.background = "limegreen";
                divBox.style.margin = "2px";
                divBox.classList.add("oneSquare");
                    gridArea.append(divBox);}  
                    };
divGen(sideLen);