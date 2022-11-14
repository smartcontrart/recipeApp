export function fetchGroceriesList(){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        console.log('fetched')
        dispatch({ type: 'FETCH_GROCERIES_LIST' });    
        return fetch("http://localhost:3000/api/v1/groceries_list/" ,{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token'],
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then(response => response.json())
        .then(groceries_list => { 
            dispatch({type:'FETCH_GROCERIES_LIST_SUCCESS', payload: groceries_list})
        })
        .catch(error =>{
            dispatch({type:'FETCH_GROCERIES_LIST_FAILURE', payload: error, error:true})
        })
    }    
};

// export function checkOrUncheckIngredient(isChecked, ingredient){
//     return { 
//         type: 'CHECK_OR_UNCHECK_INGREDIENT',
//         payload: ingredient,
//     };
// };
