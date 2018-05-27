console.log("Up and running!");


var card = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var cehckForMatch = function () {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match");
        } else {
            alert("Sorry, try again.");
        }
    }
};

var flipCard = function (cardId) {
    console.log("User Flipped " + card[cardId]);
    cardsInPlay.push(card[cardId]);
    cehckForMatch();
    //console.log(cardsInPlay);

};
flipCard(0);
flipCard(1);