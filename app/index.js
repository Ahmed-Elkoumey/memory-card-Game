var cards, cardsArray, isFlipped, fsCard, secCard, reStart;

cards = document.getElementsByClassName("memory-card");
reStart = document.getElementById("reStart")
cardsArray = Array.from(cards);
cardsArray[Math.floor(Math.random())];
isFlipped = false;



function flipCard(e) {
    e.target.parentNode.classList.add('flip');

    if (!isFlipped) {
        isFlipped = true;
        fsCard = e.target.parentNode;
    }
    else {
        isFlipped = false;
        secCard = e.target.parentNode;

        isMatched();
    }
}


function isMatched() {
    if (fsCard.dataset.info === secCard.dataset.info) {
        fsCard.removeEventListener("click", flipCard);
        secCard.removeEventListener("click", flipCard);

        fsCard.style.borderColor = "#21dd60";
        secCard.style.borderColor = "#21dd60";
        console.log("matched");

    }
    else {
        fsCard.style.borderColor = "#e93030";
        secCard.style.borderColor = "#e93030";

        setTimeout(function () {
            fsCard.classList.remove("flip");
            secCard.classList.remove("flip");


            fsCard.style.borderColor = "#1c7ccc";
            secCard.style.borderColor = "#1c7ccc";
        }, 600)

    }


}

cardsArray.forEach(function (card) {
    card.addEventListener("click", flipCard)
});

reStart.addEventListener("click", function () {
    window.location.reload();

});