export function fetchRecipe(recipe_name){
    return (dispatch) => {
        dispatch({ type: 'FETCH_RECIPE' });    
        return fetch("http://localhost:3000/api/v1/recipes/" + recipe_name ,{
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
        })
        .then(response => response.json())
        .then(recipe => { 
            dispatch({type:'FETCH_RECIPE_SUCCESS', payload: recipe})
        })
        .catch(error =>{
            dispatch({type:'FETCH_RECIPE_FAILURE', payload: error, error:true})
        })
    }    
};


// export function fetchRecipe(user, recipe_id){
//     return (dispatch) => {
//         dispatch({ type: 'FETCH_RECIPE' });    
//         return fetch("http://localhost:3000/api/v1/recipes/" + recipe_id ,{
//             method: "GET",
//             cache: "no-cache",
//             credentials: "same-origin",
//             headers: {
//                 "Content-Type": "application/json; charset=utf-8",
//                 "uid": user.uid,
//                 "client":  user.client,
//                 "access-token":  user['access-token']
//             },
//         })
//         .then(response => response.json())
//         .then(post => { 
//             dispatch({type:'FETCH_RECIPE_SUCCESS', payload: post})
//         })
//         .catch(error =>{
//             dispatch({type:'FETCH_RECIPE_FAILURE', payload: error, error:true})
//         })
//     }    
// };