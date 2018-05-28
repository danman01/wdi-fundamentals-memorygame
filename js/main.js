console.log("Up and running!");


var card = [{
        rank: "queen",
        suit: "hearts",
        cardImage: "/images/queen-of-hearts.png"
    },

    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "/images/queen-of-diamonds.png"
    },

    {
        rank: "king",
        suit: "hearts",
        cardImage: "/images/king-of-hearts.png"
    },

    {
        rank: "king",
        suit: "diamonds",
        cardImage: "/images/king-of-diamonds.png"
    }];

var cardsInPlay = [];

var checkForMatch = function () {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match");
        } else {
            alert("Sorry, try again.");
        }
    }
};

var flipCard = function (cardId) {
    console.log("User Flipped " + card[cardId].rank);
    cardsInPlay.push(card[cardId].rank);
    checkForMatch();
    console.log(card[cardId].suit);
    console.log(card[cardId].cardImage);

};
flipCard(0);
flipCard(2);