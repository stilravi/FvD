/* Filter Constants */
var optionAll = document.querySelector("#filter-all");
var optionAnimals = document.querySelector("#filter-animals");
var optionBuildings = document.querySelector("#filter-buildings");
var optionNature = document.querySelector("#filter-nature");
var optionCars = document.querySelector("#filter-cars");

/* Filter Function */
function filterList(event){
    let deLijst = document.querySelector("ul");
    let nieuweFilter = event.target.value;
    deLijst.className = "";
    deLijst.classList.add(nieuweFilter);
}

/* Filter Eventlisteners */
optionAll.addEventListener("change", filterList);
optionAnimals.addEventListener("change", filterList);
optionBuildings.addEventListener("change", filterList);
optionNature.addEventListener("change", filterList);
optionCars.addEventListener("change", filterList);



/* Search */
var options = {
    valueNames: [ 'name', 'tags' ]
};

var charactersList = new List('theList', options);


/* Image Lightbox */
$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
});

$('.popup-link').magnificPopup({
    type: 'image'
});



















// Like Constructors
// const allImages = document.querySelectorAll('figure');

// // Like function
// allImages.forEach(image => {
//     image.addEventListener('dblclick', (event) => {
//         image.classList.toggle('liked');
//     });
// });
