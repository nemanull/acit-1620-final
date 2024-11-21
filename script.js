
teachers = [
    {
        teacher_name: "Test_name1",
        hp: "110",
        type: "water",
        attacks: {
            attack_1: {
                attack_name: "splash",
                attack_damage: "30",
                attack_energy_require: "3"
            },
            attack_2: {
                attack_name: "hit",
                attack_damage: "70",
                attack_energy_require: "4"
            }
        },
        special_skill: "bonus mark"
    },
    {
        teacher_name: "Test_name2",
        hp: "120",
        type: "fire",
        attacks: {
            attack_1: {
                attack_name: "flame",
                attack_damage: "40",
                attack_energy_require: "2"
            },
            attack_2: {
                attack_name: "burn",
                attack_damage: "80",
                attack_energy_require: "3"
            }
        },
        special_skill: "extra credit"
    },
    {
        teacher_name: "Test_name3",
        hp: "130",
        type: "earth",
        attacks: {
            attack_1: {
                attack_name: "quake",
                attack_damage: "50",
                attack_energy_require: "4"
            },
            attack_2: {
                attack_name: "crush",
                attack_damage: "90",
                attack_energy_require: "2"
            }
        },
        special_skill: "homework pass"
    },
    {
        teacher_name: "Test_name4",
        hp: "140",
        type: "air",
        attacks: {
            attack_1: {
                attack_name: "gust",
                attack_damage: "60",
                attack_energy_require: "1"
            },
            attack_2: {
                attack_name: "blow",
                attack_damage: "100",
                attack_energy_require: "3"
            }
        },
        special_skill: "study guide"
    },
    {
        teacher_name: "Test_name5",
        hp: "150",
        type: "electric",
        attacks: {
            attack_1: {
                attack_name: "shock",
                attack_damage: "70",
                attack_energy_require: "3"
            },
            attack_2: {
                attack_name: "zap",
                attack_damage: "110",
                attack_energy_require: "4"
            }
        },
        special_skill: "free period"
    },
    {
        teacher_name: "Test_name6",
        hp: "160",
        type: "ice",
        attacks: {
            attack_1: {
                attack_name: "freeze",
                attack_damage: "80",
                attack_energy_require: "2"
            },
            attack_2: {
                attack_name: "chill",
                attack_damage: "120",
                attack_energy_require: "4"
            }
        },
        special_skill: "extra recess"
    },
    {
        teacher_name: "Test_name7",
        hp: "170",
        type: "psychic",
        attacks: {
            attack_1: {
                attack_name: "mind_blast",
                attack_damage: "90",
                attack_energy_require: "4"
            },
            attack_2: {
                attack_name: "telekinesis",
                attack_damage: "130",
                attack_energy_require: "3"
            }
        },
        special_skill: "field trip"
    }
];



const rarities = [
    { name: "Common", probability: 0.5},
    { name: "Uncommon", probability: 0.3},
    { name: "Rare", probability: 0.10},
    { name: "Epic", probability: 0.04},
    { name: "Mythic", probability: 0.01},
    { name: "Legendary", probability: 0.005}
];


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
                <div class="energy">
                    <div>${teacher.attacks.attack_1.attack_energy_require} ${teacher.attacks.attack_1.attack_name}</div>
                    <div class="attack-damage">${teacher.attacks.attack_1.attack_damage}</div>
                </div>
                <div class="energy">
                    <div>${teacher.attacks.attack_2.attack_energy_require} ${teacher.attacks.attack_2.attack_name}</div>
                    <div class="attack-damage">${teacher.attacks.attack_2.attack_damage}</div>
                </div>
            </div>
            <div class="special-skill">Special Skill: ${teacher.special_skill}</div>
        `;

        cardContainer.appendChild(newCard);
    }

    // Append the card container to the playground
    playground.appendChild(cardContainer);
}




    




































