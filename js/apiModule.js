
import {displayRecipes, displayRecipesDetails} from './displayModule.js';

export let allRecipes = [];
export let allIngrediants ={};


export async function getRecipes(term)
{
    let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);
    let finalResult = await apiResponse.json();
    allRecipes = finalResult.recipes;
    displayRecipes();
}

export async function getRecipesDetails(id)
{
    let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    let finalResult = await apiResponse.json();
    allIngrediants = finalResult.recipe;
    console.log(allIngrediants);
    displayRecipesDetails();
}
