function createDivs (numberofDivs) {
    const container = document.querySelector('.container');

    for (i = 0; i < (numberofDivs * numberofDivs); i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('item');

        const boxSize = 500 / numberofDivs;
        newDiv.style.width = boxSize + 'px';
        newDiv.style.height = boxSize + 'px';

        container.appendChild(newDiv);
    };
};

createDivs(40);