let playerText = document.getElementById("playerText");
let restartButton = document.getElementById("restartButton");
let boxes = Array.from(document.getElementsByClassName("box"));

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')
// array.from = create an arary from an array-like object (which are the boxes)

// console.log(boxes)
//we dont want this though... we want to convert this html collection into an array and save taht into our boxes variable
debugger;
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT; // start game off with X text
let spaces = Array(9).fill(null); // now we need to make sure when a user occupies a space, we need to save it soewhere so either player doesnt override eachother
// now we have 9 null/empty spaces that will be filled eventaully

// now lets start the game!
const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
  // when user clicks a box...
};
//... store the id/blox that was clicked on
// targetting the id clicked and storing it isnside const id

function boxClicked(e) {
  const id = e.target.id;
  if (!spaces[id]) {
    // if id = null/ not filled with an id, we can conitnue the game
    spaces[id] = currentPlayer; // filling the spaces with either X or O so its not null anymore
    // essentially spaces[id] = currentIndex
    e.target.innerText = currentPlayer;
    if (playerWon() !== false) {
        playerText.innerText = `${currentPlayer} has won!`;

      let winning_blocks = playerWon()
      //console.log(winning_blocks)
      // code below is looping over all the boxes, getting the current index of the aray, and adding a background style to it 
      winning_blocks.map(box => boxes[box].style.backgroundColor = winnerIndicator);
      
    }

    currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
    // syntax: if you click on first box, its x, then alterantes to o, then x, etc
  }
}
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8]
];

// with these winning combos, we need to check if currentuser has filled 3 of the spaces
function playerWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition // de-structuring the array/taking variable from the array and saving it into the 3 vairables
        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            // array spaces at position a must be equal to arary spaces in b (basically if all three are X text)
        return [a,b,c] // if true
    } 
   
    }
    return false
}

restartButton.addEventListener("click", restart);

function restart() {
  // this function clears out the table and spaes array
  spaces.fill(null); // filling it up with the value null

  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = "";
  });
  playerText = "tic tac toe";
  currentPlayer = X_TEXT;
}
startGame();
