import {getRecipes , getRecipesDetails} from './apiModule.js';
import {searchBtn , searchInput} from './elementsModule.js';


window.getRecipesDetails = getRecipesDetails;

searchBtn.addEventListener("click", function()
{
    getRecipes(searchInput.value);
});




//https://forkify-api.herokuapp.com/api/get?rId=46895