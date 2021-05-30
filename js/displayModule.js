import {allRecipes , allIngrediants} from './apiModule.js';

export function displayRecipes()
{
    
    let cartoona = ``;
    for (let i = 0; i < allRecipes.length; i++) {
        cartoona += `   <div class="col-md-4 curs" onclick="getRecipesDetails(${allRecipes[i].recipe_id})">
       <img  src="${allRecipes[i].image_url}"  class="w-100 image py-2" alt="${allRecipes[i].title}">
        <h4 class="color-mine font-weight-bolder py-1">${allRecipes[i].title}</h4>
        <p class="font-weight-bold py-1">${allRecipes[i].publisher}</p>
      </div>`
        
    }
    document.getElementById("recipesRow").innerHTML = cartoona;

    
}

export function displayRecipesDetails()
{
    let ingreds = allIngrediants.ingredients;
    let cartoona = `<h3 class="color-mine font-weight-bolder">${allIngrediants.title}</h3>
    <img src="${allIngrediants.image_url}" class="w-100 py-2 image2"alt="">
    <p class="font-weight-bold">${allIngrediants.publisher}</p>
    <p class="text-left font-weight-bold">Ingredients :</p>
    <ul class="fa-ul">`;
    for (let i of ingreds) {
        cartoona+=` 
        
          <li class="py-1 text-left"><span class="fa-li"><i class="fas fa-utensils"></i> </span>${i}</li>
        `;  
    }
    cartoona +=`</ul>`;
    document.getElementById("recipeDetails").innerHTML=cartoona;
}
