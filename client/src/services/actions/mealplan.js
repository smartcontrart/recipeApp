export function fetchUserLastMealPlan(){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({ type: 'GET_MEALPLAN' });    
        return fetch("http://localhost:3000/api/v1/mealplan/",{
            headers:{
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token'],
                "Access-Control-Allow-Origin": "*",
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({type:'GET_MEALPLAN_SUCCESS', payload: response})
        })
        .catch(error =>{
            dispatch({type:'GET_MEALPLAN_FAILURE', payload: error})
        })
    }    
};

export function createNewMealplan( mealplan_name){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({ type: 'CREATE_NEW_MEALPLAN' });    
        return fetch("http://localhost:3000/api/v1/mealplans/",{
        method: 'POST',    
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "uid": user.uid,
            "client":  user.client,
            "access-token":  user['access-token'],
            },
        body:JSON.stringify({
            "mealplan_name": mealplan_name,
        })
        })
        .then(response => response.json())
        .then(response => {
            dispatch({type:'CREATE_NEW_MEALPLAN_SUCCESS', payload: response})
        })
        .catch(error =>{
            dispatch({type:'CREATE_NEW_MEALPLAN_FAILURE', payload: error, error:true})
        })
    }    
};

export function updateMealMultiplicator(to_do,  multiplicator_id){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({ type: 'ADD_OR_REMOVE_GUEST_FOR_RECIPE' });    
        return fetch("http://localhost:3000/api/v1/quantities_multiplicator/" + multiplicator_id,{
        method: 'PUT',    
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "uid": user.uid,
            "client":  user.client,
            "access-token":  user['access-token'],
            },
        body:JSON.stringify({
            "to_do": to_do,
        })
        })
        .then(response => response.json())
        .then(response => {
            dispatch({type:'ADD_OR_REMOVE_GUEST_FOR_RECIPE_SUCCESS', payload: response})
        })
        .catch(error =>{
            dispatch({type:'ADD_OR_REMOVE_GUEST_FOR_RECIPE_FAILURE', payload: error, error:true})
        })
    }    
};

export function addOrRemoveRecipeToMealplan(action, mealplan_id, day_name, meal_name, recipe_id, multiplicator){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({ type: 'ADD_OR_REMOVE_RECIPE_TO_MEAL' });    
        return fetch("http://localhost:3000/api/v1/mealplans/" + mealplan_id,{
        method: 'PUT',    
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "uid": user.uid,
            "client":  user.client,
            "access-token":  user['access-token'],
            },
        body:JSON.stringify({
            "to-do": action,
            "day-name": day_name,
            "meal-name": meal_name,
            "recipe-id": recipe_id,
            "multiplicator": multiplicator  
        })
        })
        .then(response => response.json())
        .then(response => {
            if (action === "Remove"){
                dispatch({type:'REMOVE_RECIPE_TO_MEAL_SUCCESS', payload: response})
            }else if (action === "Add"){
                dispatch({type:'ADD_RECIPE_TO_MEAL_SUCCESS', payload: response})
            }
        })
        .catch(error =>{
            dispatch({type:'ADD_OR_REMOVE_RECIPE_TO_MEAL_FAILURE', payload: error, error:true})
        })
    }    
};