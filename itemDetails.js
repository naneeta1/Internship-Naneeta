$(document).ready(function() {
// Fetch the details of the item from the API using the item ID
const urlParams = new URLSearchParams(window.location.search);
// Get the item ID from the URL parameters
const itemId  = urlParams.get('id');
const storedItem = JSON.parse(localStorage.getItem(itemId));
//console.log(storedItem.recipe.ingredientLines);
const img = document.getElementById('recipe-img');
const label = document.getElementById('recipe-label');
const ing =document.getElementById('ingredients')
const details = document.getElementById('full-recipe');
img.src= storedItem.recipe.image;
label.innerText = storedItem.recipe.label+`(${storedItem.recipe.dishType[0]})`;
const ingredients = storedItem.recipe.ingredientLines
console.log(storedItem)
    for (let i = 0; i < ingredients.length; i++) {
        let item = document.createElement("li");
        //item.appendChild(document.createTextNode(ingredients[i]));
        item.innerHTML= ingredients[i]
        ing.appendChild(item)
    }

details.setAttribute('href',storedItem.recipe.url)
})