let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('button')

function computerPlay() {
    let choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
    
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ){

        playerScore ++
        result = (`You win<br><br> player: ${playerScore}<br> computer: ${computerScore}`);

        if (playerScore === 5) {
            result = (`You won the game! <br><br>
            Reload page to start again.`);
        }

    } else if (playerSelection == computerSelection) {
        result =(`It's a tie<br><br> player: ${playerScore}<br> computer: ${computerScore}`);

    } else {
        computerScore ++
        result = (`You lose <br><br> player: ${playerScore}<br> computer: ${computerScore}`);

        if (computerScore === 5) {
            result = (`You lost the game! <br><br>
            Reload page to start again.`);
        }


    }

    document.getElementById('result').innerHTML= result
    return
}

buttons.forEach(button=> {
    button.addEventListener('click', function() {
        playRound(button.value)
    })
})

