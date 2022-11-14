export default function userReducer(state = {
    isLoaded: false,
    errorMessage: '',
    id: null,
    userSettings: {},
    dietAndAllergies: {}
}, action) {

    switch (action.type) {
        case 'GET_USER_PARAMETERS':
            return {
                ...state,
                isLoaded: false
            }

        case 'GET_USER_PARAMETERS_SUCCESS':
            return {
                ...state,
                isLoaded: true,
                id: action.payload.id,
                user_id: action.payload.user_id,
                userSettings: {week_starting_day: action.payload.week_starting_day, default_number_of_guests: action.payload.default_number_of_guests},
                dietAndAllergies:  {is_gluten_free: action.payload.is_gluten_free, is_vegetarian: action.payload.is_vegetarian, is_vegan: action.payload.is_vegan, shellfish_allergic: action.payload.shellfish_allergic, nuts_allergic: action.payload.nuts_allergic, lactose_intolerant: action.payload.lactose_intolerant}
            }

        case 'GET_USER_PARAMETERS_FAILURE':
            return {
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message
            }

            case 'UPDATE_USER_PARAMETERS':
                return {
                    ...state,
                    isLoaded: false
                }
    
            case 'UPDATE_USER_PARAMETERS_SUCCESS':
                return {
                    ...state,
                    isLoaded: true,
                    id: action.payload.id,
                    user_id: action.payload.user_id,
                    userSettings: {week_starting_day: action.payload.week_starting_day, default_number_of_guests: action.payload.default_number_of_guests},
                    dietAndAllergies: { is_gluten_free: action.payload.is_gluten_free, is_vegetarian: action.payload.is_vegetarian, is_vegan: action.payload.is_vegan, shellfish_allergic: action.payload.shellfish_allergic, nuts_allergic: action.payload.nuts_allergic, lactose_intolerant: action.payload.lactose_intolerant}
                }
    
            case 'UPDATE_USER_PARAMETERS_FAILURE':
                return {
                    ...state,
                    isLoaded: true,
                    errorMessage: action.payload.message
                }
    

        
        default:
            return state;
    }
}