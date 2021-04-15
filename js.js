 let userScore = 0;
 let compScore = 0;
 let userScore_span = document.getElementById('user-score');
 let computerScore_span = document.getElementById("computer-score");
 const scoreBoard_div = document.querySelector(".score-board");
 const results_div = document.querySelector(".results");
 const rock_div = document.getElementById("R");
 const paper_div = document.getElementById("P");
 const sissors_div = document.getElementById("S");


 function getComputerChoice() {
     const choices = ['R' , 'P' , 'S'];
     const randomNumber = Math.floor(Math.random() * 3);
     return choices[randomNumber];
 }
function convertToWord(letter) {
    if (letter === 'R') return  'Rock';
    if (letter === 'P') return  'Paper';
    return 'Sissors'

}
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    results_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${smallCompWord}   YOU WIN!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300);
}



    function lose(userChoice, computerChoice) {
        compScore++;
        computerScore_span.innerHTML = compScore;
        const smallUserWord = 'user'.fontsize(3).sup();
        const smallCompWord = 'comp'.fontsize(3).sup();
        results_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to  ${convertToWord(computerChoice)}${smallCompWord}   YOU LOSE HA.HA.HA.!`;
        document.getElementById(userChoice).classList.add('red-glow');
        setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
    }

function draw(userChoice, computerChoice) {
const smallUserWord = 'user'.fontsize(3).sup();
const smallCompWord = 'comp'.fontsize(3).sup();
results_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  ties  ${convertToWord(computerChoice)}${smallCompWord}   DRAW!`;
document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 300);
}






function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'RS':
        case 'PR':
        case 'SP':
        win(userChoice, computerChoice);
        console.log('Win')
        break;
        case 'RP':
        case 'PS':
        case 'SR':
        lose(userChoice, computerChoice);
        console.log('Loss');
        break;
        case 'RR':
        case 'PP':
        case 'SS':
        draw(userChoice , computerChoice);
        console.log( 'TIE');
         break;

    }
}

rock_div.addEventListener('click', function(){
    game('R');
})
paper_div.addEventListener('click', function(){
    game('P');
})
sissors_div.addEventListener('click', function(){
    game('S');
})








