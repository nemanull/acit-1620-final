






teachers = [
    {
        teacher_name: "Test_name1",
        hp: "110",
        type: "water",
        attacks: {
            splash: "30",
            hit: "70",
            splash_energy: 3,
            hit_energy: 4
        },
        special_skill: "bonus mark"
    },
    {
        teacher_name: "Test_name2",
        hp: "120",
        type: "fire",
        attacks: {
            flame: "40",
            burn: "80",
            flame_energy: 2,
            burn_energy: 3
        },
        special_skill: "extra credit"
    },
    {
        teacher_name: "Test_name3",
        hp: "130",
        type: "earth",
        attacks: {
            quake: "50",
            crush: "90",
            quake_energy: 4,
            crush_energy: 2
        },
        special_skill: "homework pass"
    },
    {
        teacher_name: "Test_name4",
        hp: "140",
        type: "air",
        attacks: {
            gust: "60",
            blow: "100",
            gust_energy: 1,
            blow_energy: 3
        },
        special_skill: "study guide"
    },
    {
        teacher_name: "Test_name5",
        hp: "150",
        type: "electric",
        attacks: {
            shock: "70",
            zap: "110",
            shock_energy: 3,
            zap_energy: 4
        },
        special_skill: "free period"
    },
    {
        teacher_name: "Test_name6",
        hp: "160",
        type: "ice",
        attacks: {
            freeze: "80",
            chill: "120",
            freeze_energy: 2,
            chill_energy: 4
        },
        special_skill: "extra recess"
    },
    {
        teacher_name: "Test_name7",
        hp: "170",
        type: "psychic",
        attacks: {
            mind_blast: "90",
            telekinesis: "130",
            mind_blast_energy: 4,
            telekinesis_energy: 3
        },
        special_skill: "field trip"
    }
]


const rarities = [
    { name: "Common", probability: 0.5},
    { name: "Uncommon", probability: 0.3},
    { name: "Rare", probability: 0.10},
    { name: "Epic", probability: 0.04},
    { name: "Mythic", probability: 0.01},
    { name: "Legendary", probability: 0.005}
];

function getAttacks(attackObj) {
    let attacks = [];
    let keys = Object.keys(attackObj);

    // Extract attack names and their corresponding data
    for (let i = 0; i < keys.length; i++) {
        if (!keys[i].endsWith('_energy')) {
            let attackName = keys[i];
            let damage = attackObj[keys[i]];
            let energyKey = attackName + '_energy';
            let energy = attackObj[energyKey];

            attacks.push({
                name: attackName,
                energy: energy,
                damage: damage
            });
        }
    }
    return attacks;
}

function packOpen() {
    const playground = document.getElementById('playground');
    const pack = document.getElementById('pack');

    playground.removeChild(pack);

    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    for (let i = 0; i < 5; i++) {

        // Determine card rarity
        let luck = Math.random();
        let card_rarity = 'Common'; // Default to Common
        for (let j = 0; j < rarities.length; j++) {
            if (luck >= rarities[j].probability) {
                card_rarity = rarities[j].name;
                break;
            }
        }

        // Select a random teacher
        let teacherIndex = Math.floor(Math.random() * teachers.length);
        let teacher = teachers[teacherIndex];

        // Get attacks data
        let attacks = getAttacks(teacher.attacks);

        // Create card element
        const newCard = document.createElement('div');
        newCard.className = 'card';

        // Build the card's innerHTML with your layout
        newCard.innerHTML = `
            <div class="card-header">
                <div class="rarity">${card_rarity}</div>
                <div class="hp">${teacher.hp} HP</div>
            </div>
            <div class="card-image">
                <p>${teacher.teacher_name}</p>
            </div>
            <div class="card-content">
                ${attacks.map(attack => `
                <div class="energy">
                    <div>${attack.energy} ${attack.name}</div>
                    <div class="attack-damage">${attack.damage}</div>
                </div>
                `).join('')}
            </div>
            <div class="special-skill">Special Skill: ${teacher.special_skill}</div>
        `;

        cardContainer.appendChild(newCard);
    }

    // Append the card container to the playground
    playground.appendChild(cardContainer);
}




    




































