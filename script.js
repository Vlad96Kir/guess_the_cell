let field = document.getElementById("field");
let clicks = 0;
let remainingCells = 10;
let correctGuesses = 0;
let attempts = 0;

let randomNumbers = generateNumbers(10);

function createField(size) {
    for (let i = 0; i < size; i++) {
        let row = "<tr>";
        for (let j = 0; j < size; j++) {
            row += `<td onclick="checkCell(this)" id="cell${i * size + j + 1}">${i * size + j + 1}</td>`;
        }
        row += '</tr>';
        field.innerHTML += row;
    }
}

function generateNumbers(n) {
    let numbers = new Set();

    while (numbers.size < n) {
        numbers.add(Math.floor(Math.random() * 100) + 1);
    }

    return Array.from(numbers);
}

function checkCell(element) {
    let number = Number(element.innerText);
    clicks++;
    attempts++;
    document.getElementById('clicks').innerText = clicks;

    if (randomNumbers.includes(number)) {
        element.style.backgroundColor = "green";
        element.style.pointerEvents = "none";
        remainingCells--;
        correctGuesses++;
        document.getElementById('remaining').innerText = remainingCells;

        if (remainingCells === 0) {
            let successRate = (100 - ((attempts - correctGuesses) * 10)).toFixed(2);
            alert(`Вітаємо! Ви вгадали всі комірки за ${clicks} спроб.`);
        }
    } else {
        element.style.backgroundColor = "red";
    }
}

let fieldSize = 10;
createField(fieldSize);
