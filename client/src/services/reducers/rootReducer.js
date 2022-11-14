import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import mealplansReducer from './mealplansReducer.js'
import mealplanReducer from './mealplanReducer.js'
import categoriesReducer from './categoriesReducer.js'
import recipeReducer from './recipeReducer.js'
import groceriesListReducer from './groceriesListReducer.js'
import userIngredientsReducer from './userIngredientsReducer.js'
import userReducer from './userReducer.js'
import suggestionsReducer from './suggestionsReducer.js'
import searchRecipesReducer from './searchRecipesReducer.js'


export default combineReducers({
    auth: authReducer,
    recipe: recipeReducer,
    mealplan: mealplanReducer,
    mealplans: mealplansReducer,
    userParameters: userReducer,
    categories: categoriesReducer,
    suggestions: suggestionsReducer,
    groceriesList: groceriesListReducer,
    userIngredients: userIngredientsReducer,
    searchResults: searchRecipesReducer
  })
  