export default function authReducer(state = {
    isLoaded: false,
    userLoggedIn: false,
}, action) {

    switch (action.type) {
        
        // User login actions
        case 'SIGNING_IN_USER':
            return  {
                ...state,
            }

        case 'SIGN_IN_USER_SUCCESS':
            return  {
                isLoaded: true,
                userLoggedIn: true,
                user: action.payload}

        case 'SIGN_IN_USER_FAILURE':
            return{
                ...state,
                isLoaded: true,
                loginErrorMessage: action.payload.message}

        case 'RESENDING_CONFIRMATION_EMAIL':
            return  {
                ...state,
            }

        case 'RESENDING_CONFIRMATION_EMAIL_SUCCESS':
            return  {
                isLoaded: true,
                user: action.payload}

        case 'RESENDING_CONFIRMATION_EMAIL_FAILURE':
            return{
                ...state,
                isLoaded: true,
                loginErrorMessage: action.payload.message}

        // Credential verification actions
        case 'CREDENTIAL_VERIFICATION':
            return  {
                ...state,
            }
        
        case 'CREDENTIAL_VERIFICATION_SUCCESS':
            return  {
                isLoaded: true,
                userLoggedIn: true,
                user: action.payload}                

        case 'CREDENTIAL_VERIFICATION_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}
        
        // Logout actions
        case 'SIGNING_OUT_USER':
            return  {
                ...state,
            }
        
        case 'SIGN_OUT_USER_SUCCESS':
            return  {
                isLoaded: true,
                userLoggedIn: false,
                    }                

        case 'SIGN_OUT_USER_FAILURE':
            return{
                ...state,
                isLoaded: true,
                logoutErrorMessage: action.payload.message}

                // Sign Up action
        case 'SIGNING_UP_USER':
            return  {
                ...state,
            }

        case 'SIGN_UP_USER_SUCCESS':
            return  {
                isLoaded: true,
                // pendingEmailConfirmation: true,
                user: action.payload}

        case 'SIGN_UP_USER_FAILURE':
            return{
                ...state,
                isLoaded: true,
                signupErrorMessage: action.payload.message}
        
        default:
            return state;
    }
}