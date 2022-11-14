export default function mealplanReducer(state = {
    isLoaded: false,
    errorMessage: '',
    id: null,
    name: "",
    days: []
}, action) {

    switch (action.type) {
        case 'GET_MEALPLAN':
            return {
                ...state,
                isLoaded: false
            }

        case 'GET_MEALPLAN_SUCCESS':
            return {
                ...state,
                isLoaded: true,
                id: action.payload.id,
                name: action.payload.name,
                days: [].concat(action.payload.days)
            }

        case 'GET_MEALPLAN_FAILURE':
            return {
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message
            }
        
        case 'CREATE_NEW_MEALPLAN':
            return {
                ...state,
                isLoaded: false
            }

        case 'CREATE_NEW_MEALPLAN_SUCCESS':
            return {
                ...state,
                isLoaded: true,
                id: action.payload.id,
                name: action.payload.name,
                days: [].concat(action.payload.days)
            }

        case 'CREATE_NEW_MEALPLAN_FAILURE':
            return {
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message
            }

        case 'REMOVE_RECIPE_FROM_MEAL':
            return {
                ...state,
            }

        case 'REMOVE_RECIPE_TO_MEAL_SUCCESS':
                state.days.map((day, day_index) => {
                    if (day.id === action.payload.day.id) {
                        if (action.payload.level === "day") {
                            state.days.splice(day_index, 1)
                        } else {
                            day.meals.map((meal, meal_index) => {
                                if (meal.id === action.payload.meal.id) {
                                    if(action.payload.level === "meal"){
                                        day.meals.splice(meal_index, 1)
                                    }else{
                                        meal.recipes.map((recipe, recipe_index)=>{
                                            if(recipe.id === action.payload.recipe.id){
                                                meal.recipes.splice(recipe_index ,1)
                                            }
                                            return null
                                        })
                                        meal.quantities_multiplicators.map((quantities_multiplicator, quantities_multiplicator_index)=>{
                                            if(quantities_multiplicator.id === action.payload.quantities_multiplicator.id){
                                                meal.quantities_multiplicators.splice(quantities_multiplicator_index ,1)
                                            }
                                            return null
                                        })
                                    }
                                } 
                                return null
                            })
                        }
                    } 
                    return null
                })
            return{...state}

        case 'ADD_RECIPE_TO_MEAL_SUCCESS':
            // If the highest level is a recipe, we identify the day and the meal where it needs to be added and add it
            if (action.payload.level === "recipe"){
                state.days.map((day, day_index)=>{
                    if(day.id === action.payload.day.id){
                        day.meals.map((meal, meal_index)=>{
                            if(meal.id===action.payload.meal.id){
                                meal.recipes.splice(meal.recipes.length, 0, action.payload.recipe)
                                meal.quantities_multiplicators.splice(meal.quantities_multiplicators.length, 0, action.payload.quantities_multiplicator)
                            }
                            return null
                        })
                    }
                    return null
                })
            // If the highest level is a meal, we find the day where it needs to be added and create the data structure to be added, then add it 
            }else if(action.payload.level === "meal"){
                // First we map over the day
                state.days.map((day, day_index)=>{
                    if (day.id === action.payload.day.id){
                        // When the day is found, we create the meal in the array of meals within days
                        day.meals.splice(day.meals.length, 0, action.payload.meal)
                        let meal = day.meals[day.meals.length -1]
                        // We then add a new "recipes" key to the meal object and add an a value of an array containing the new recipe
                        meal["recipes"] = [action.payload.recipe]
                        // We then add a new "quantities_multiplicators" key to the meal object and add an a value of an array containing the new recipe
                        meal["quantities_multiplicators"] = [action.payload.quantities_multiplicator]
                    }
                    return null
                })
            // If the highest level is a day, create the data structure to be added, then add it 
            }else{
                // We create the data structure by adding the recipe to the meal and the quantities_multiplicator
                let meal = action.payload.meal
                meal["recipes"] = [action.payload.recipe]
                meal["quantities_multiplicators"] = [action.payload.quantities_multiplicator]
                // we then add the meal to the days
                let day = action.payload.day
                day["meals"] = [action.payload.meal]
                // We then add the day to the days in the state
                let days = state.days
                days.splice(state.days.length, 0, day)
                // We then return the updated state
                return {...state,
                    days: days
                
                }
            }
        return{...state}

        case 'ADD_OR_REMOVE_RECIPE_TO_MEAL_FAILURE':
            return {
                ...state,
                errorMessage: action.payload.message
            }


        case "ADD_OR_REMOVE_GUEST_FOR_RECIPE": 
            return {
                ...state,
                isLoaded: false,
            }
        
        case "ADD_OR_REMOVE_GUEST_FOR_RECIPE_SUCCESS":
            state.days.map((day)=>{
                if(day.id === action.payload.day.id){
                    day.meals.map((meal)=>{
                        if(meal.id === action.payload.quantities_multiplicator.meal_id){
                            meal.quantities_multiplicators.map((quantities_multiplicator,quantities_multiplicator_index)=>{
                                if(quantities_multiplicator.id===action.payload.quantities_multiplicator.id){
                                    meal.quantities_multiplicators.splice(quantities_multiplicator_index, 1, action.payload.quantities_multiplicator)
                                }
                                return null
                            } )
                        }
                            return null
                    })
                }
                return null
            })
                return state

        case "ADD_OR_REMOVE_GUEST_FOR_RECIPE_FAILURE":
            return {
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message
            }

        default:
            return state;
    }
}