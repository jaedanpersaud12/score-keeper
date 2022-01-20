const p1 = {
    display: document.querySelector('#player-one-score'),
    button: document.querySelector('#player-one-button'),
    score: 0
}

const p2 = {
    display: document.querySelector('#player-two-score'),
    button: document.querySelector('#player-two-button'),
    score: 0
}

const scoreCap = document.querySelector('#score-cap')
const resetButton = document.querySelector('#reset')

let winningScore = parseInt(scoreCap.value)

let isGameOver = false;

p1.button.addEventListener('click', () => incrementScore(p1, p2))

p2.button.addEventListener('click', () => incrementScore(p2, p1))

scoreCap.addEventListener('change', () => {
    winningScore = parseInt(scoreCap.value)
    reset()
})

resetButton.addEventListener('click', reset)

function incrementScore(winner, opponent) {
    if (!isGameOver) {
        winner.score++
            if (winner.score === winningScore) {
                isGameOver = true;
                winner.display.classList.add('has-text-success')
                opponent.display.classList.add('has-text-danger')
                winner.button.disabled = true
                opponent.button.disabled = true
            }
    }
    winner.display.textContent = winner.score
}

function reset() {
    isGameOver = false;
    p1.score = 0
    p2.score = 0
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.classList.remove('has-text-success', 'has-text-danger')
    p2.display.classList.remove('has-text-success', 'has-text-danger')
    p1.button.disabled = false
    p2.button.disabled = false
}

document.body.addEventListener('keydown', (e) => {
    switch (e.code) {
        case "KeyA":
            incrementScore(p1, p2);
            break;
        case "KeyL":
            incrementScore(p2, p1);
            break;
        case "KeyR":
            reset();
            break
    }
})