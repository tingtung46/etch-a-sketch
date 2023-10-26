const container = document.querySelector('.container');
const gridBtn = document.querySelector('.create-grid');
const rainbowBtn = document.querySelector('.rainbow');
const squares = document.querySelectorAll('.item');

function createDivs (numberofDivs) {
    for (i = 0; i < (numberofDivs * numberofDivs); i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('item');

        const boxSize = 500 / numberofDivs;
        newDiv.style.width = boxSize + 'px';
        newDiv.style.height = boxSize + 'px';

        container.appendChild(newDiv);
    };

    container.addEventListener('mouseover', item => {
        item.target.style.backgroundColor = 'black';
    });
};

function inputSquares() {
    let allSquares = squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
    let numberofDivs = parseInt(prompt('How many square per side you want create? (max: 100)'));
    
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
}

gridBtn.addEventListener('click', () => {
    inputSquares();
});

rainbowBtn.addEventListener('click', () => {
    container.addEventListener('mouseover', item => {
        item.target.style.backgroundColor = rainbowClr();
    });
});

createDivs(16);