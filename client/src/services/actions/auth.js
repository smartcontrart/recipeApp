export function login(email, password, history){
    return (dispatch) => {
        dispatch({ type: 'SIGNING_IN_USER' });    
        return fetch("http://localhost:3000/api/v1/auth/sign_in" ,{
            method: "POST", 
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => { 
            const user = {};
            response.headers.forEach((value, name) => user[name] = value);
            localStorage.setItem('user', JSON.stringify(user));
            return response.json()
        })
        .then(response =>{
            if(response.success ===  false) throw new Error(response.errors)
            else {
                dispatch({type:'SIGN_IN_USER_SUCCESS', payload: response.data });
                history.push('/')
            }
        })
        .catch(error =>{
            dispatch({type:'SIGN_IN_USER_FAILURE', payload: error, error:true})
        })
    }    
};

export function verify_credentials(){
    return(dispatch=>{
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({type: "CREDENTIAL_VERIFICATION"})
        return fetch("http://localhost:3000/api/v1/auth/validate_token", {
            headers:{
                "uid": user.uid,
                "client": user.client,
                "access-token": user['access-token']
            }
        })
        .then(response => {
            return response.json()
            })
        .then(response=>{
            if(!response.success) throw new Error(response.errors)
            else dispatch({type: "CREDENTIAL_VERIFICATION_SUCCESS", payload: response.data})
        })  
        .catch(error=>{
            localStorage.removeItem('user');
            dispatch({type:'CREDENTIAL_VERIFICATION_FAILURE', payload: error, error:true})
        })
    })
}

export function logout(history){
    return(dispatch=>{
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        dispatch({type: "SIGNING_OUT_USER", payload: user})
        return fetch("http://localhost:3000/api/v1/auth/sign_out", {
        method: 'DELETE',
        headers:{
            "uid": user['uid'],
            "client":  user['client'],
            "access-token":  user['access-token']
            }
        })
        .then(response => {
            localStorage.removeItem('user');
            return response.json()
            })
        .then(response=>{
            console.log(response)
            if(!response.success) throw new Error(response.errors)
            else {
                dispatch({type: "SIGN_OUT_USER_SUCCESS", payload: response});
                history.push('/')
            }
        })
        .catch(error=>{
            dispatch({type:'SIGN_OUT_USER_FAILURE', payload: error, error:true})
        })
    })
}

export function signup( email, password, password_confirmation, state, history){
    return (dispatch) => {
        dispatch({ type: 'SIGNING_UP_USER' });    
        return fetch("http://localhost:3000/api/v1/auth/" ,{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                password_confirmation: password_confirmation,
                state: state
            })
        })
        .then(response => {
            const user = {};
            response.headers.forEach((value, name) => user[name] = value);
            localStorage.setItem('user', JSON.stringify(user));
            return response.json()
        })
        .then(response => { 
            if(response.status === 'error') throw new Error(response.errors)
            else {
                dispatch({type:'SIGN_UP_USER_SUCCESS', payload: response.data });
                history.push('/')
            }
        })
        .catch(error =>{
            dispatch({type:'SIGN_UP_USER_FAILURE', payload: error, error:true})
        })
    }    
};

export function resendConfirmationEmail(email){
    return (dispatch) => {
        dispatch({ type: 'RESENDING_CONFIRMATION_EMAIL' });    
        return fetch("http://localhost:3000/api/v1/auth/confirmation" ,{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                email: email,
                redirect_url: 'http://localhost:3002/'
            })
        })
        .then(response => {
            response.json()
        })
        .then(response => { 
            if(response.status === 'error') throw new Error(response.errors)
            else dispatch({type:'RESENDING_CONFIRMATION_EMAIL_SUCCESS', payload: response.data })
        })
        .catch(error =>{
            dispatch({type:'RESENDING_CONFIRMATION_EMAIL_SUCCESS', payload: error, error:true})
        })
    }    
};

export function requestPasswordReset(email){
    return (dispatch) => {
        dispatch({ type: 'REQUESTING_PASSWORD_RESET' });    
        return fetch("http://localhost:3000/api/v1/auth/password" ,{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                email: email,
                redirect_url: 'http://localhost:3002/reset_password'
            })
        })
        .then(response => {
            response.json()
        })
        .then(response => { 
            if(response.status === 'error') throw new Error(response.errors)
            else dispatch({type:'REQUESTING_PASSWORD_RESET_SUCCESS', payload: response.data })
        })
        .catch(error =>{
            dispatch({type:'REQUESTING_PASSWORD_RESET_FAILURE', payload: error, error:true})
        })
    }    
};


export function resetPassword( password, password_confirmation, history){
    return (dispatch) => {
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        dispatch({ type: 'RESETING_USER_PASSWORD' });    
        return fetch("http://localhost:3000/api/v1/auth/password" ,{
            method: "PUT",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "uid": user['uid'],
                "client":  user['client'],
                "access-token":  user['access-token'],
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                password: password,
                password_confirmation: password_confirmation
            })
        })
        .then(response => {
            response.json()
        })
        .then(response => { 
            if(response.status === 'error') throw new Error(response.errors)
            else {
                dispatch({type:'RESETING_USER_PASSWORD_SUCCESS', payload: response });
                history.push('/')
            }
        })
        .catch(error =>{
            dispatch({type:'RESETING_USER_PASSWORD_FAILURE', payload: error, error:true})
        })
    }    
};