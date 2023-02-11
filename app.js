const APP_ID = "e176fb08"
const APP_KEY = "447e37b8de98f08f6341d9b77700605a"
const searchText = document.getElementById('search-text');
const searchForm = document.getElementById('search-form');
const contData = document.getElementById('menu-dish');

$(document).ready(function() {
    const contData = document.getElementById('menu-dish');
    const loader = document.getElementById('loader');
    contData.innerHTML = '';
    let val = "pastry";
    const app_url = `https://api.edamam.com/search?q=${val}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    $.ajax({
        type: "GET",
        url:app_url,
        beforeSend:function(){
            contData.style.display = "none";
            loader.style.display = "block";
        },
        success:function(data){
            const compData= data.hits;
            compData.map((item)=>{
                
                let url = item.recipe.uri;
                let extractedPart = url.split("#")[1];
                //extractedPart = '#'+ extractedPart;
                localStorage.setItem(extractedPart, JSON.stringify(item));
                console.log(extractedPart)
                //let input = item.recipe.uri;
                //let uri = input.substring(input.indexOf("_") + 1);
                
                contData.innerHTML+= ` 
                <div class="card-container">
                <div class="card" id=${extractedPart}>
                <img src=${item.recipe.image} alt=""/>
                <h4>${item.recipe.calories.toFixed(1)} cal</h4>
                <h5>${item.recipe.label}</h5>
                <h5>${item.recipe.cuisineType} Dish</h5>
            </div>
            </div>`
            })
            loader.style.display = "none";
            contData.style.display = "block";
            const items = document.querySelectorAll('.card');
            items.forEach((item)=>{
                item.addEventListener("click",()=>{
                    const itemId = item.id;
                    //localStorage.setItem('name','naneeta')
                    //localStorage.setItem(itemId, JSON.stringify(item));
                // Redirect the user to the itemDetails page and pass the item ID as a parameter
                window.location.href = `itemdetails.html?id=${itemId}`;
                console.log(item.id);
                })
            })

        },
        error:function(error){
            console.log(error);
        }
    });
  });

 
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    contData.innerHTML = '';
    let val = searchText.value;
    const app_url = `https://api.edamam.com/search?q=${val}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    
    $.ajax({
        type: "GET",
        url:app_url,
        beforeSend:function(){
            contData.style.display = "none";
            loader.style.display = "block";
        },
        success:function(data){
            const compData= data.hits;
            compData.map((item)=>{
                
                let url = item.recipe.uri;
                let extractedPart = url.split("#")[1];
                //extractedPart = '#'+ extractedPart;
                localStorage.setItem(extractedPart, JSON.stringify(item));
                console.log(extractedPart)
                //let input = item.recipe.uri;
                //let uri = input.substring(input.indexOf("_") + 1);
                
                contData.innerHTML+= ` 
                <div class="card-container">
                <div class="card" id=${extractedPart}>
                <img src=${item.recipe.image} alt=""/>
                <h4>${item.recipe.calories.toFixed(1)} cal</h4>
                <h5>${item.recipe.label}</h5>
                <h5>${item.recipe.cuisineType} Dish</h5>
            </div>
            </div>`
            })
            loader.style.display = "none";
            contData.style.display = "block";
            const items = document.querySelectorAll('.card');
            items.forEach((item)=>{
                item.addEventListener("click",()=>{
                    const itemId = item.id;
                    //localStorage.setItem('name','naneeta')
                    //localStorage.setItem(itemId, JSON.stringify(item));
                // Redirect the user to the itemDetails page and pass the item ID as a parameter
                window.location.href = `itemdetails.html?id=${itemId}`;
                console.log(item.id);
                })
            })

        },
        error:function(error){
            console.log(error);
        }
    });
    //console.log(searchText.value);
});
