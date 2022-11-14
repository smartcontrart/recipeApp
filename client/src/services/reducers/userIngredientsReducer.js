export default function userIngredientsReducer(state = {
    isLoaded: false,
    errorMessage: '',
    ingredients: [],
    }, action) {

    switch (action.type) {
        case 'FETCH_USER_INGREDIENTS':
            return  {
                    ...state,
                    isLoaded: false}
            
        case 'FETCH_USER_INGREDIENTS_SUCCESS':
            return  {
                    ...state,
                    ingredients: [].concat(action.payload),
                    isLoaded: true,}

        case 'FETCH_USER_INGREDIENTS_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}


        case 'UPDATE_USER_INGREDIENTS':
            return  {
                    ...state,
                    isLoaded: false}
            
        case 'UPDATE_USER_INGREDIENTS_SUCCESS':
            return  {
                    ...state,
                    ingredients: [].concat(action.payload),
                    isLoaded: true,}

        case 'UPDATE_USER_INGREDIENTS_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}
        
                default:
            return state;
    }
}