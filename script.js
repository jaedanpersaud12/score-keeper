const p1Score = document.querySelector('#player-one-score')
const p2Score = document.querySelector('#player-two-score')
const scoreCap = document.querySelector('#score-cap')

const p1Button = document.querySelector('#player-one-button')
const p2Button = document.querySelector('#player-two-button')
const resetButton = document.querySelector('#reset')

let p1Count = 0
let p2Count = 0
let winningScore = parseInt(scoreCap.value)

let isGameOver = false;

p1Button.addEventListener('click', () => incrementP1)

p2Button.addEventListener('click', () => incrementP2)

scoreCap.addEventListener('change', () => {
    winningScore = parseInt(scoreCap.value)
    reset()
})

resetButton.addEventListener('click', reset)

function incrementP1() {
    if (!isGameOver) {
        p1Count++
        if (p1Count === winningScore) {
            isGameOver = true;
            p1Score.classList.add('green')
            p2Score.classList.add('red')
        }
    }
    p1Score.textContent = p1Count
}

function incrementP2() {
    if (!isGameOver) {
        p2Count++
        if (p2Count === winningScore) {
            isGameOver = true;
            p1Score.classList.add('red')
            p2Score.classList.add('green')
        }
    }
    p2Score.textContent = p2Count
}

function reset() {
    isGameOver = false;
    p1Count = 0
    p2Count = 0
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Score.classList.remove('green', 'red')
    p2Score.classList.remove('green', 'red')
}

document.body.addEventListener('keydown', (e) => {
    switch (e.code) {
        case "KeyA":
            incrementP1();
            break;
        case "KeyL":
            incrementP2();
            break;
        case "KeyR":
            reset();
            break
    }

})