const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const LOSE = 0;
const TIE = 1;
const WIN = 2;

let player_score = 0;
let computer_score = 0;


function on_load() {
  const buttons = document.querySelectorAll("button");

  const result_span = document.querySelector("#text-result");
  const player_span = document.querySelector("#player-score");
  const computer_span = document.querySelector("#computer-score");
  const final_div = document.querySelector("#final-result")

  buttons.forEach(button => {
    button.addEventListener("click", e => {
      let player = parseInt(e.currentTarget.getAttribute("data-play"));
      let computer = computer_play();
      result_span.innerHTML = results(player, computer);

      switch(compare(player, computer)){
        case LOSE:
          computer_score++;
          break;
        case WIN:
          player_score++;
          break;
      }

      player_span.innerHTML = `Your score: ${player_score}`;
      computer_span.innerHTML = `Opponents score: ${computer_score}`;

      if(player_score == 5 || computer_score == 5) {
        buttons.forEach(button => {
          button.disabled = true;
        });

        final_div.innerHTML = `${player_score == 5 ? "You are" : "The opponent is"} the champion!`;
      }
    });
  });
}

function computer_play(){
  return Math.floor(Math.random() * 3)
}

function compare(player, computer){
  if((player + 1) % 3 == computer) {
    return LOSE;
  }
  else if (player == computer) {
    return TIE;
  }
  else {
    return WIN;
  }
}

function results(player, computer){
  switch (compare(player, computer)) {
    case LOSE:
      return "You Lose! " + to_string(computer) + " Beats " + to_string(player) + "!";
      break;
    case TIE:
      return "It's a tie!";
      break;
    case WIN:
      return "You Win! " + to_string(player) + " Beats " + to_string(computer) + "!";
      break;
  }
}

function to_string(play){
  switch (play) {
    case ROCK:
      return "Rock"
      break;
    case PAPER:
      return "Paper"
      break;
    case SCISSORS:
      return "Scissors";
      break;
  }
}
