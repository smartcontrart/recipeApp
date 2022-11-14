export default function mealplansReducer(state = {
    isLoaded: false,
    errorMessage: '',
    userMealplans: [],
    }, action) {

    switch (action.type) {
        case 'GET_MEALPLANS':
            return  {
                    ...state,
                    isLoaded: false}
            
        case 'GET_MEALPLANS_SUCCESS':
            return  {
                    ...state,
                    userMealplans: [].concat(action.payload),
                    isLoaded: true,}

        case 'GET_MEALPLANS_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}
            
        case 'GET_PREVIOUS_MEALPLAN':
            return  {
                    ...state,
                    isLoaded: false}
       
        case 'GET_PREVIOUS_MEALPLAN_SUCCESS':
            return  {
                ...state,
                userMealplans: [].concat(action.payload),
                isLoaded: true,}      

        // case 'GET_PREVIOUS_MEALPLAN_SUCCESS':
        //     state.userMealplans.map((mealplan, mealplan_index)=>{
        //         if(mealplan.id === action.payload.id){
        //             let mealplan_object = Object.assign({}, action.payload, {mealplanLoaded: true})
        //             state.userMealplans.splice(mealplan_index, 1, mealplan_object)
        //         }else{
        //             return null
        //         }
        //     })
            // return  {
            //         ...state,
            //         userMealplans: [].concat(action.payload),
            //         isLoaded: true,}

        case 'GET_PREVIOUS_MEALPLAN_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}