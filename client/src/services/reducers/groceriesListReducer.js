export default function groceriesListReducer(state = {
    isLoaded: false,
    errorMessage: '',
    ingredients: [],
    quantities: [],
    }, action) {

    switch (action.type) {
        case 'FETCH_GROCERIES_LIST':
            return  {
                    ...state,
                    isLoaded: false}
            
        case 'FETCH_GROCERIES_LIST_SUCCESS':
            return  {
                    ...state,
                    ingredients: [].concat(action.payload.ingredients),
                    quantities: [].concat(action.payload.quantities),
                    isLoaded: true,}

        case 'FETCH_GROCERIES_LIST_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}