export default function recipeReducer(state = {
    isLoaded: false,
    errorMessage: '',
    recipe: {},
    }, action) {

    switch (action.type) {
        case 'FETCH_RECIPE':
            return  {
                ...state,
                isLoaded: false}
            
        case 'FETCH_RECIPE_SUCCESS':
            return  {
                ...state,
                isLoaded: true,
                recipe: action.payload}

        case 'FETCH_RECIPE_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}