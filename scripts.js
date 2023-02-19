const gridArea = document.querySelector('#gridArea'); 
const gridBreak = document.createElement("br");
const genButton = document.querySelector("#generateButton");

genButton.addEventListener("click", function(){
    
    //Clears results of any previous funcion call
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }}
    const gridArea = document.querySelector('#gridArea');
    removeAllChildNodes(gridArea);

    //Main function
    let sideLenPrompt = prompt("How large would you like the sides of your square to be?")
    let sideLen = sideLenPrompt;
    let divGen = function(sideLen)
    {for (j = 0; j < sideLen; j++)  
        for (i = 0; i < sideLen; i++) {
            const divBox = document.createElement("div");
                divBox.innerHTML = "<div> </div>";
                divBox.style.width = "15px";
                divBox.style.height = "15px";
                divBox.style.background = "limegreen";
                divBox.style.margin = "0px";
                divBox.classList.add("oneSquare");
                divBox.addEventListener("mouseenter",function() {divBox.classList.add("revealed")})
                divBox.addEventListener("mouseout",function() {divBox.classList.remove("revealed")})
                    gridArea.append(divBox);}  
                    };
    divGen(sideLen);
})