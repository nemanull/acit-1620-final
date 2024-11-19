



function packOpen() {
    const playground = document.getElementById('playground');
    const pack = document.getElementById('pack');



    playground.removeChild(pack);


    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    for (let i = 0; i < 5; i++) {
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.textContent = `Card ${i + 1}`; // Optional content for each card
        cardContainer.appendChild(newCard);
    }

    // Append the card container to the playground
    playground.appendChild(cardContainer);
}


















