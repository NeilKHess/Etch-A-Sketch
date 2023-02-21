//Location references
const gridArea = document.querySelector('#gridArea'); 
const genButton = document.querySelector("#generateButton");
const sideLenSlider = document.getElementById("#sideLenSlider");
//Emoji DB
//let emojis = ['💘','💝','💖','💗','💓','💞','💕','💟','❣️','💔','❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍','❤️‍','🔥','❤️‍','🩹','💯','♨️','💢','💬','👁️‍🗨️','🗨️','🗯️','💭','💤','🌐','♠️','♥️','♦️','♣️','🃏','🀄️','🎴','🎭️','🔇','🔈️','🔉','🔊','🔔','🔕','🎼','🎵','🎶','💹','🏧','🚮','🚰','♿️','🚹️','🚺️','🚻','🚼️','🚾','🛂','🛃','🛄','🛅','⚠️','🚸','⛔️','🚫','🚳','🚭️','🚯','🚱','🚷','📵','🔞']

//Game Modes//
// const defaultMode = funciton();
// const emojiMode = funciton();
// const scrabbleMode = funciton();
// const scratcherMode = funciton();
// const eraserMode = funciton();
// const customTextMode = funciton();
// const whackAMode = function();
// const myTeamMode = function();

//Style Selectors//
// const gridAreaColor = function();
// const gridSquareColor = function();

//sideLenSlider Listener
//let sideLen = {sideLenSlider.onmousemove = (e) => updateSizeValue(e.sideLenSlider.value)};




//***Default Mode***//
defaultGenButton.addEventListener("click", function(){
        console.log('clicked')
        //Clears results of any previous grid//
        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }}
        const gridArea = document.querySelector('#gridArea');
        removeAllChildNodes(gridArea);

        let sideLen = document.getElementById('sideLenSlider').value;
        let divGen = function(sideLen){
            for (j = 0; j < sideLen; j++)  
            for (i = 0; i < sideLen; i++) {
                const divBox = document.createElement("div");
                    gridArea.style.gridTemplateColumns = `repeat(${sideLen}, 1fr)`;
                    gridArea.style.gridTemplateRows = `repeat(${sideLen}, 1fr)`;
                    divBox.innerHTML = "<div> </div>";
                    divBox.style.margin = "0px";
                    divBox.classList.add("defaultSquare");
                    divBox.addEventListener("mouseenter",function() {divBox.classList.add("defaultModeRevealed")})
                    divBox.addEventListener("mouseout",function() {divBox.classList.remove("defaultModeRevealed")})
                    gridArea.append(divBox);}  
                    };
        divGen(sideLen);
});

// //***Emoji Mode---Need to find a solution for emojis spilling outside of gridArea***//
// emojiGenButton.addEventListener("click", function(){
//     console.log('clicked')
//     //Clears results of any previous grid//
//     function removeAllChildNodes(parent) {
//         while (parent.firstChild) {
//             parent.removeChild(parent.firstChild);
//         }}
//     const gridArea = document.querySelector('#gridArea');
//     removeAllChildNodes(gridArea);

//     let sideLen = document.getElementById('sideLenSlider').value;
//     let divGen = function(sideLen){
//         for (j = 0; j < sideLen; j++)  
//         for (i = 0; i < sideLen; i++) {
//             const divBox = document.createElement("div");
//                 gridArea.style.gridTemplateColumns = `repeat(${sideLen}, 1fr)`;
//                 gridArea.style.gridTemplateRows = `repeat(${sideLen}, 1fr)`;
//                 divBox.innerHTML = "<div></div>";
//                 divBox.innerText = emojis[(Math.floor(Math.random() * (emojis.length)))];
//                 divBox.style.margin = "0px";
//                 divBox.classList.add("oneSquare");
//                 divBox.addEventListener("mouseenter",function() {divBox.classList.add("defaultModeRevealed")})
//                 divBox.addEventListener("mouseout",function() {divBox.classList.remove("defaultModeRevealed")})
//                 gridArea.append(divBox);}  
//                 };
//     divGen(sideLen);
// });


//FEATURES TO ADD TO THIS//
//Custom Text (CRUD functionality)
//Object oriented modes
//Make the "modes" load from JSON settings?
//Custom thumbnails
//Scrabble Mode (Each box reveals a random letter)
//Scratcher mode (gradually uncover opacity 10% with a gray scrather film, change mouse cursor to a "penny" to scratch, make a single square say "winner")
//Eraser mode (gradually erase a full grid 10%)
//Slider? https://www.w3schools.com/jsref/prop_range_value.asp

