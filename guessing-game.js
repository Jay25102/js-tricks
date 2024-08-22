function guessingGame() {
    let targetNum = Math.floor(Math.random() * 100);
    let gameFinished = false;
    let numGuesses = 0;

    return function game(userNum) {
        if (gameFinished) return "The game is over, you already won!";
        numGuesses++;
        if (userNum === targetNum) {
            gameFinished = true;
            let guess = numGuesses === 1 ? "guess" : "guesses";
            return `You win! You found ${targetNum} in ${numGuesses} ${guess}.`
        }
        if (userNum < targetNum) return `${userNum} is too low!`;
        if (userNum > targetNum) return `${userNum} is too high!`;
    }
}

module.exports = { guessingGame };
