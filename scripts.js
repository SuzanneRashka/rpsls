//Math for random computer choice
let computerChoice = Math.random();

if (computerChoice <= 0.20) {
    computerChoice = "rock";
} else if (computerChoice <= 0.40) {
    computerChoice = "paper";
} else if (computerChoice <= 0.60) {
    computerChoice = "scissors";
} else if (computerChoice <= 0.80) {
    computerChoice = 'lizard';
} else {
    computerChoice = 'Spock';
}

function replay() {
    location.reload();
}

// let anyclick on fancy-btn, change to that value
// let compare = function(userChoice, computerChoice){
//   if(userChoice === computerChoice){
//     $("#textarea").append('It was a tie!');
//   } // Rock
//   else if (userChoice === $( "#rock" ) ) {
//   if (computerChoice === "scissors") {
//     $("#textarea")("You Win! Rock beats scissors.");
//   } else {
//     window.alert("You Lose! Paper beats rock.");
//   }
// }
// }
