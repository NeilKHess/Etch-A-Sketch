//(Remember there is going to be a GENERATE button to make this happen)
//[ENTER SIDE LENGTH]

//[GENERATE BUTTON CLICK]
//For loop to push number of spaces into "innards" array
let innards = [];

//Make Side length input box

let spacePush = function(sideLen){
    for (i = 0; i < sideLen; i++) {innards.push('_')}
}




//Make click listener that 1) retrives value 2) generates the boxes 3) alerts the user to try another value if it is NOT between 1-99

spacePush(10);



//construction and delivery of "boxes"
let gridCanvas = document.querySelector('#gridCanvas');



let boxes = innards.map(innards => {
    let li = document.createElement('li');
    li.textContent = innards;
    return li;
});


//Make click listener
gridCanvas.append(...boxes);

//Helpful Videos
//appendChild() tutorial: https://www.youtube.com/watch?v=e0ihEHxd6vI
//https://www.javascripttutorial.net/javascript-dom/javascript-append/