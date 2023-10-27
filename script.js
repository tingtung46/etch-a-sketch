const container = document.querySelector('.container');
const gridBtn = document.querySelector('.create-grid');
const rainbowBtn = document.querySelector('.rainbow');
const resetBtn = document.querySelector('.reset');
const colorPicker = document.querySelector('.color-picker')
const squares = document.querySelectorAll('.item');

let numberofDivs = 16;

function createDivs (numberofDivs) {
    for (i = 0; i < (numberofDivs * numberofDivs); i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('item');

        const boxSize = 500 / numberofDivs;
        newDiv.style.width = boxSize + 'px';
        newDiv.style.height = boxSize + 'px';

        container.appendChild(newDiv);
    };
};

function inputSquares() {
    let allSquares = squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
    numberofDivs = parseInt(prompt('How many square per side you want create? (max: 100)'));
    
    if (numberofDivs === NaN) {
        alert('You must enter positive integer (Max: 100)');
        return;
    } else if (numberofDivs <= 0) {
        alert('You must enter positive integer (Max: 100)');
        return;
    } else if (numberofDivs > 100) {
        alert('You must enter positive integer (Max: 100)');
        return;
    }
    
    while (container.firstChild) container.removeChild(container.firstChild);
    createDivs(numberofDivs);
};

function random(number) {
    return Math.floor(Math.random() * number);
};

function rainbowClr() {
    const rainbow = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rainbow;
};

function resetGrid() {
    let allSquares = squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
    
    while (container.firstChild) container.removeChild(container.firstChild);
    createDivs(numberofDivs);
};

gridBtn.addEventListener('click', () => {
    inputSquares();
});

rainbowBtn.addEventListener('click', () => {
    container.addEventListener('mouseover', item => {
        item.target.style.backgroundColor = rainbowClr();
    });
});

colorPicker.oninput = () => {
    container.addEventListener('mouseover', item => {
        item.target.style.backgroundColor = colorPicker.value;
    });
};

resetBtn.addEventListener('click', resetGrid);

window.onload = (event) => {
    createDivs(16);
    container.addEventListener('mouseover', item => {
        item.target.style.backgroundColor = 'black';
    });
};