let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "Scissors"]; // Array will not be generate random number but number will be possible any random number generate
  // decimal number remove Math.floor(Math.random()*3);
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game Was draw. play again.";
};

const showWinner = (userWin, userChoice , compuChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${compuChoice}`;
  } else {
    compScore++;
    compscorepara.innerText = compScore;
    msg.innerText = `You Lose! Your ${compuChoice} beats Your ${userChoice}`;
  }
};

const playGame = (userChoice) => {
  //Generate computer choice  
  const compuChoice = genCompChoice();

  if (userChoice === compuChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scrissors, paper

      userWin = compuChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compuChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compuChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compuChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
