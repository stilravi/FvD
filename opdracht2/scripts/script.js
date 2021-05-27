// JavaScript Document
const list = document.querySelector('.list');
const URL = 'https://api.unsplash.com/photos/?client_id=FxDvymrjT20LGA8aaNLkt4N4F8UwviLYDagJT-Ha1_g';

getData(URL).then(function(data){
    const allBreweries = data;
    console.log(data);
    allBreweries.forEach(function(brewery) {
         const breweryListElement = 
            `
            <li> 
                <img src="${brewery.urls.small}">
                <p>${brewery.user.name}</p>
            </li>
            `
         list.insertAdjacentHTML('beforeend', breweryListElement)
    });
});

async function getData(url){
    const result = await fetch(url)
    const data = await result.json()
    return data;
};
