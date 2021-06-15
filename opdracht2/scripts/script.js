/*========================== Filteren==========================*/
/*
Code gebruikt en eigen gemaakt van Filter Codepen Sanne:
https://codepen.io/shooft/pen/VwpvVYy
*/

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



/*========================== Zoeken==========================*/
/*
Code gebruikt en eigen gemaakt van Zoeken Codepen Sanne:
https://codepen.io/shooft/pen/VwpvBeX
En ook gebruik gemaakt van de Libray List.js
https://listjs.com/
*/

var options = {
    valueNames: [ 'name', 'tags' ]
};

var charactersList = new List('theList', options);



/*============================= Image Popup =============================*/
/*
Image Popup Library gebruikt:
https://dimsemenov.com/plugins/magnific-popup/
*/

$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
});

$('.popup-link').magnificPopup({
    type: 'image'
});



/*========================== Favorieten Overlay==========================*/
const favOverlay = document.querySelector('#favorites-overlay');
const openFavButton = document.querySelector('#open-fav-btn');
const closeFavButton = document.querySelector('#close-fav-btn');

function openFavOverlay() {
    favOverlay.classList.add('active');
};

function closeFavOverlay() {
    favOverlay.classList.remove('active');
};

openFavButton.addEventListener('click', openFavOverlay);
closeFavButton.addEventListener('click', closeFavOverlay);



/*======================= Toevoegen aan favorieten ======================*/
/*
Code gebruikt en eigen gemaakt van de volgende bron:
https://medium.com/sharing-and-learning/creating-a-shopping-cart-with-vanilla-javascript-23b2e4d8e1ef
*/

const cardList = document.querySelector('#card-list');
favoritesOverlayContent = document.querySelector('#favorites-overlay ul');

 //Event listeners inladen
loadEventListeners();

function loadEventListeners(){
    cardList.addEventListener('dblclick', addToFavorites);
    favoritesOverlayContent.addEventListener('click', removeCourse);
};

// Favorieten Counter
favoritesCount = 0;
favoritesEmptyText = document.querySelector('#favorites-empty-text');
favoritesCounterText = document.querySelector('#favorites-counter-text');

checkFavoritesCount();

function checkFavoritesCount() {
    if (favoritesCount < 1) {
        favoritesEmptyText.style.display = 'block';
        favoritesCounterText.style.display = 'none';
    } else {
        favoritesEmptyText.style.display = 'none';
        favoritesCounterText.style.display = 'block';
    }
}

function updateFavCounter() {
    favoritesCounterText.innerHTML = favoritesCount;
}

// Favorieten Toevoegen
function addToFavorites(e){
    if(e.target.classList.contains('card-item')) {
        const card = e.target;
        e.target.classList.add('liked');
        getCardInfo(card);
        hideDialog();
    }
};

// Data van huidige object ophalen
function getCardInfo(card) {
    setTimeout(() => {  card.classList.remove('liked'); }, 1000);
    const cardInfo = {
        image: card.querySelector('img').src,
        title: card.querySelector('h3').textContent,
        tags: card.querySelector('p').textContent,
    }
    addToCart(cardInfo);
}

// Object met favorieten Data inladen in HTML
function addToCart(card) {
    const listItem = document.createElement('li');
    listItem.innerHTML =
        `
            <img src="${card.image}" alt="favorite image" />
            <div>
                <h3>${card.title}</h3>
                <p>${card.tags}</p>
            </div>
            <button class="remove"></button>
        `
        ;
    favoritesOverlayContent.appendChild(listItem);
    favoritesCount = favoritesCount +1;
    checkFavoritesCount();
    updateFavCounter();
}

// Favoriet verwijderen
function removeCourse(e){
    if(e.target.classList.contains('remove')){
         e.target.parentElement.remove();
         favoritesCount = favoritesCount - 1;
         checkFavoritesCount();
         updateFavCounter();
    }
}

/*========================== Hint Popup ==========================*/
const hintDialog = document.querySelector('#hint-dialog');

function showDialog() {
    setTimeout(() => {  hintDialog.classList.add('active'); }, 2000);
}

function hideDialog() {
    hintDialog.classList.remove('active');
}

showDialog();
