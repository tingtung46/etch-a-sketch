const container = document.querySelector('.container');

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

container.addEventListener('mouseover', item => {
    item.target.style.backgroundColor = 'black';
});

createDivs(16);