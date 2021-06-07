
// Filter Constructors
const natureCheckbox = document.querySelector('input#nature');
const natureImages = document.querySelectorAll('figure.nature');
const buildingsCheckbox = document.querySelector('input#buildings');
const buildingsImages = document.querySelectorAll('figure.buildings');
const carsCheckbox = document.querySelector('input#cars');
const carsImages = document.querySelectorAll('figure.cars');
const animalsCheckbox = document.querySelector('input#animals');
const animalsImages = document.querySelectorAll('figure.animals');

// Like Constructors
const allImages = document.querySelectorAll('figure');


// Filter function
natureImages.forEach(image => {
    natureCheckbox.addEventListener('click', (event) => {
        image.classList.toggle('show');
    });
});

buildingsImages.forEach(image => {
    buildingsCheckbox.addEventListener('click', (event) => {
        image.classList.toggle('show');
    });
});

carsImages.forEach(image => {
    carsCheckbox.addEventListener('click', (event) => {
        image.classList.toggle('show');
    });
});

animalsImages.forEach(image => {
    animalsCheckbox.addEventListener('click', (event) => {
        image.classList.toggle('show');
    });
});

// Like function
allImages.forEach(image => {
    image.addEventListener('dblclick', (event) => {
        image.classList.toggle('liked');
    });
});
