const cards = document.querySelectorAll('.memory-card');
let lockBoard = false;
let flippedcard = false;
let firstcard , secondcard;
function flipCard()
{
    if(lockBoard) return;
    this.classList.add('flip');
    if (this === firstcard) return;
    if (!flippedcard)
    {
        flippedcard = true;
        firstcard = this;

        return;
    }
        secondcard = this;

    checkForMatch()
}

function checkForMatch()
{
    if (firstcard.dataset.framework === secondcard.dataset.framework)
    {    disableCards(); }

    else{ unflippedCards();  }

}

function disableCards()
{
    firstcard.removeEventListener('click',flipCard);
    secondcard.removeEventListener('click',flipCard);
    firstcard.classList.add('hide');
    secondcard.classList.add('hide');
    resetBoard();

}

function unflippedCards()
{
    lockBoard = true;
    setTimeout( () => {
        firstcard.classList.remove('flip');
        secondcard.classList.remove('flip');
        resetBoard();
    },1500);

}

function resetBoard()
{
    [flippedcard,lockBoard] = [false,false];
    [firstcard,secondcard] = [null,null];
}

(function shuffle()
{
    cards.forEach((card) => {
        let randomPos = Math.floor(Math.random()*12);
        card.style.order=randomPos;
    });
})(); 


cards.forEach((card) => card.addEventListener('click',flipCard));

