function createDivs (numberofDivs) {
    const container = document.querySelector('.container');

    for (i = 0; i < numberofDivs; i++) {
        const newDiv = document.createElement('div');
        newDiv.style.border = '1px solid black';
        newDiv.style.width = '100px';
        newDiv.style.height = '100px';
        container.appendChild(newDiv);
    };
};

createDivs(32);