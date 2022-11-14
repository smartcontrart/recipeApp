export function fetchSuggestions(){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({ type: 'LOAD_SUGGESTIONS' });    
        return fetch("http://localhost:3000/api/v1/suggestions/" ,{
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token']
            },
        })
        .then(response => response.json())
        .then(suggested_recipes => { 
            dispatch({type:'LOAD_SUGGESTIONS_SUCCESS', payload: suggested_recipes})
        })
        .catch(error =>{
            dispatch({type:'LOAD_SUGGESTIONS_FAILURE', payload: error, error:true})
        })
    }
};