export default function categoriesReducer(state = {
    isLoaded: false,
    errorMessage: '',
    categoriesList: [],
    filters: [],
    filteredRecipes: []
    }, action) {

    switch (action.type) {
        case 'LOAD_CATEGORIES':
            return  {
                ...state,
                isLoaded: false}
        
        case 'LOAD_CATEGORIES_SUCCESS':
            return  {
                ...state,
                isLoaded: true,
                categoriesList: [].concat(action.payload)}

        case 'LOAD_CATEGORIES_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}
        
        case 'ADDING_FILTER':
            return{
                ...state,
                filters: [].concat(action.payload),
                isLoaded: false,
            }

        case 'ADDING_FILTER_SUCCESS':
            return{
                ...state,
                filteredRecipes: [].concat(action.payload),
                isLoaded: true
            }
        
        case 'ADDING_FILTER_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message
            }

        case 'REMOVING_FILTER':
            return{
                ...state,
                filters: [].concat(action.payload),
                isLoaded: false,
            }

        case 'REMOVING_FILTER_SUCCESS':
            return{
                ...state,
                filteredRecipes: [].concat(action.payload),
                isLoaded: true
            }
        
        case 'REMOVING_FILTER_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message
            }

        case 'RESETTING_FILTER':
            return{
                ...state,
                filters: []
            }

        case 'RESETTING_FILTER_SUCCESS':
            return{
                ...state,
                filteredRecipes: [].concat(action.payload),
                isLoaded: true
            }
        
        case 'RESETTING_FILTER_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message
            }

        default:
            return state;
    }
}