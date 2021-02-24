
function showAnswer(value) {
    document.querySelector(`.a${String(value)}`).classList.toggle('showOrHide');
    document.querySelector(`.q${String(value)}`).classList.toggle('blackout');
}