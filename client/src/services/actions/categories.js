export function fetch_categories(){
    return (dispatch) => {
        dispatch({ type: 'LOAD_CATEGORIES' });    
        return fetch("http://localhost:3000/api/v1/categories/" ,{
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
        })
        .then(response => response.json())
        .then(response => { 
            dispatch({type:'LOAD_CATEGORIES_SUCCESS', payload: response})
        })
        .catch(error =>{
            dispatch({type:'LOAD_CATEGORIES_FAILURE', payload: error, error:true})
        })
    }    
};

export function addFilter(filter, filters){
    return (dispatch) => {
        // const strUser = localStorage.getItem('user')
        // let user = JSON.parse(strUser)
        filters.push(filter)
        dispatch({ type: 'ADDING_FILTER', payload: filters });    
        return fetch("http://localhost:3000/api/v1/filteredRecipes" ,{
            method: "POST", 
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body:JSON.stringify({
                filters: filters
            }),
        })
        .then(response => response.json())
        .then(filteredRecipes => { 
            dispatch({type:'ADDING_FILTER_SUCCESS', payload: filteredRecipes })
        })
        .catch(error =>{
            dispatch({type:'ADDING_FILTER_FAILURE', payload: error, error:true})
        })
    }
};

export function removeFilter(filter, filters){
    return (dispatch) => {
        // const strUser = localStorage.getItem('user')
        // let user = JSON.parse(strUser)
        filters = filters.filter(function(e) { return e !== filter })
        dispatch({ type: 'REMOVING_FILTER', payload: filters });    
        return fetch("http://localhost:3000/api/v1/filteredRecipes" ,{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
               "Content-Type": "application/json; charset=utf-8",
            },
            body:JSON.stringify({
                filters: filters
            }),
        })
        .then(response => response.json())
        .then(filteredRecipes => { 
            dispatch({type:'REMOVING_FILTER_SUCCESS', payload: filteredRecipes })
        })
        .catch(error =>{
            dispatch({type:'REMOVING_FILTER_FAILURE', payload: error, error:true})
        })
    }
};


export function resetFilter(){
    return (dispatch) => {
        // const strUser = localStorage.getItem('user')
        // let user = JSON.parse(strUser)
        dispatch({ type: 'RESETTING_FILTER'});    
        return fetch("http://localhost:3000/api/v1/filteredRecipes" ,{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body:JSON.stringify({
                filters: []
            }),
        })
        .then(response => response.json())
        .then(recipes => { 
            dispatch({type:'RESETTING_FILTER_SUCCESS', payload: recipes })
        })
        .catch(error =>{
            dispatch({type:'RESETTING_FILTER_FAILURE', payload: error, error:true})
        })
    }
};