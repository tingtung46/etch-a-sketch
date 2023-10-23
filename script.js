function createDivs (numberofDivs) {
    const container = document.querySelector('.container');

    for (i = 0; i < numberofDivs; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('item');
        container.appendChild(newDiv);
    };
};

createDivs(100);