export function fetchUserMealPlans(){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({ type: 'GET_MEALPLANS' });    
        return fetch("http://localhost:3000/api/v1/mealplans",{
            headers:{
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token']     
            }
        })
        .then(response => response.json())
        .then(mealplans_list => {
            dispatch({type:'GET_MEALPLANS_SUCCESS', payload: mealplans_list})
        })
        .catch(error =>{
            dispatch({type:'GET_MEALPLANS_FAILURE', payload: error, error:true})
        })
    }    
};

export function fetchPreviousMealplanInfo(mealplan_id){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({ type: 'GET_PREVIOUS_MEALPLAN' });    
        return fetch("http://localhost:3000/api/v1/mealplans/" + mealplan_id,{
            headers:{
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token'],
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(response => response.json())
        .then(mealplan => {
            dispatch({type:'GET_PREVIOUS_MEALPLAN_SUCCESS', payload: mealplan})
        })
        .catch(error =>{
            dispatch({type:'GET_PREVIOUS_MEALPLAN_FAILURE', payload: error, error:true})
        })
    }    
};