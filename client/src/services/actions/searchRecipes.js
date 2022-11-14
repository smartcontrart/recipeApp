export function searchRecipes(query){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({ type: 'LOAD_RESULTS' });    
        return fetch("http://localhost:3000/api/v1/search" ,{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token'],
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                char: query
            })
        })
        .then(response => response.json())
        .then(response => { 
            let resultsArr = []
            response.map((recipe, key)=>{
                resultsArr.push(recipe.name)
                return resultsArr
            })
            dispatch({type:'LOAD_RESULTS_SUCCESS', payload: resultsArr})
        })
        .catch(error =>{
            dispatch({type:'LOAD_RESULTS_FAILURE', payload: error, error:true})
        })
    }
};