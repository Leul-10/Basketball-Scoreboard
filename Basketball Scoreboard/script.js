let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeCount = 0;
let guestCount = 0;
homeScore.textContent = homeCount;
guestScore.textContent = guestCount;

function homeAdd(number) {
    homeCount += number;
    homeScore.textContent = homeCount;
}

function guestAdd(number) {
    guestCount += number;
    guestScore.textContent = guestCount;
}

function reset() {
    guestCount = 0;
    homeCount = 0;
    guestScore.textContent = guestCount;
    homeScore.textContent = homeCount;
}