const randomNumber = () => {
    let cardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
    return randomCardNumber = cardNumbers[Math.floor(Math.random()*12)];
} 


const randomSuit = () => {
    let suits = ['hearts', 'clubs', 'spades', 'diamonds']
    return randomClass = suits[Math.floor(Math.random()*4)];
}


window.onload = () => {
    document.getElementById("card-content").className = randomSuit();
    document.getElementById("number").innerHTML = randomNumber();
}