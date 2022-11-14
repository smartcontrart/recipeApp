export default function suggestionsReducer(state = {
    isLoaded: false,
    errorMessage: '',
    recipes: [],
    }, action) {

    switch (action.type) {
        case 'LOAD_SUGGESTIONS':
            return  {
                ...state,
                isLoaded: false}
        
        case 'LOAD_SUGGESTIONS_SUCCESS':
            return  {
                ...state,
                isLoaded: true,
                recipes: [].concat(action.payload)}

        case 'LOAD_SUGGESTIONS_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}