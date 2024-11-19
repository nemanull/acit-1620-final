// const rarities = [
//     { name: "Common", probability: 0.5, class: "common" },
//     { name: "Uncommon", probability: 0.3, class: "uncommon" },
//     { name: "Rare", probability: 0.15, class: "rare" },
//     { name: "Epic", probability: 0.04, class: "epic" },
//     { name: "Legendary", probability: 0.02, class: "legendary" },
//     { name: "Mythic", probability: 0.01, class: "mythic" }
// ];

// function getRandomRarity(rarities) {
//     const random = Math.random();
//     let initialProbability = 0;

//     for (i of rarities) {
//         initialProbability += i.probability;
//         if (random < initialProbability) {
//             return i;
//         }
//     }
// }

// // Generate 7 different rarities
// const results = [];
// for (let i = 0; i < 7; i++) {
//     results.push(getRandomRarity(rarities));
//     console.log(results[i].class)
// }

// // console.log(results);


const rarities = [
    { name: "Common", probability: 0.5, class: "common" },
    { name: "Uncommon", probability: 0.3, class: "uncommon" },
    { name: "Rare", probability: 0.15, class: "rare" },
    { name: "Epic", probability: 0.04, class: "epic" },
    { name: "Legendary", probability: 0.02, class: "legendary" },
    { name: "Mythic", probability: 0.01, class: "mythic" }
];

const people = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomRarity() {
    const rand = Math.random();
    let cumulativeProbability = 0;

    for (const rarity of rarities) {
        cumulativeProbability += rarity.probability;
        if (rand < cumulativeProbability) {
            return rarity;
        }
    }
}

shuffleArray(people);

const assignedRarities = people.map(person => {
    const rarity = getRandomRarity();
    return { name: person, rarity: rarity.name, class: rarity.class };
});

const results = [];
for (let i = 0; i < 5; i++) {
    const randomPerson = people[Math.floor(Math.random() * people.length)];
    const rarity = getRandomRarity();
    results.push({ name: randomPerson, rarity: rarity.name, class: rarity.class });
}

for(i= 0; i< 5; i++){
    console.log((results[i].name) + " " + results[i].rarity)
}


