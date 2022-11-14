export default function suggestionsReducer(state = {
    isLoaded: false,
    errorMessage: '',
    searchResults: [],
    }, action) {

    switch (action.type) {
        case 'LOAD_RESULTS':
            return  {
                ...state,
                isLoaded: false}
        
        case 'LOAD_RESULTS_SUCCESS':
            return  {
                ...state,
                isLoaded: true,
                searchResults: [].concat(action.payload)}

        case 'LOAD_RESULTS_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}