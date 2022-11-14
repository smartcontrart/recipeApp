import React, {Component} from 'react';
import { Redirect, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js'
import PublicRoute from './PublicRoute.js'
import CustomNavBar from '../../components/CustomNavBar.js'
import Home from '../../scenes/Home.js';
import Login from '../../scenes/Login.js';
import Signup from '../../scenes/Signup.js';
import SuggestRecipe from '../../scenes/SuggestRecipe.js';
import MealPlan from '../../scenes/Mealplan.js';
import Bag from '../../scenes/Bag.js';
import Browse from '../../scenes/Browse.js';
import Profile from '../../scenes/Profile.js';
import NotFoundPage from '../../scenes/NotFoundPage.js';
import Recipe from '../../scenes/Recipe.js';
import ResetPassword from '../../scenes/ResetPassword.js';
import RequestPasswordReset from '../../scenes/RequestPasswordReset.js'


class Routes extends Component {

    isLoggedIn(){
        if (localStorage.getItem("user")) {
            return true;
        }else{
            return false;
        }
    }

    render(){
        let isLoggedIn = this.isLoggedIn()
        return(
            <React.Fragment>
                <CustomNavBar/>
                <Switch>
                    <PublicRoute exact path='/' userLoggedIn={isLoggedIn} restricted={false} component={Home}/>
                    <PublicRoute exact path='/login' userLoggedIn={isLoggedIn} restricted={true} component={Login}/>
                    <PublicRoute exact path='/signup' userLoggedIn={isLoggedIn} restricted={true} component={Signup}/>
                    <PublicRoute exact path='/resend_confirmation_email' userLoggedIn={isLoggedIn} restricted={true} component={RequestPasswordReset}/>
                    <PublicRoute exact path='/suggest_a_recipe' userLoggedIn={isLoggedIn} restricted={false} component={SuggestRecipe}/>
                    <PrivateRoute exact path='/mealplan' userLoggedIn={isLoggedIn} component={MealPlan} />
                    <PublicRoute path={`/recipe/:recipeName`} userLoggedIn={isLoggedIn} restricted={false} component={Recipe}/>
                    <PrivateRoute exact path='/shopping_bag' userLoggedIn={isLoggedIn} component={Bag}/>
                    <PublicRoute exact path='/browse' userLoggedIn={isLoggedIn} restricted={false} component={Browse}/>
                    <PrivateRoute exact path='/profile' userLoggedIn={isLoggedIn} component={Profile}/>
                    <PublicRoute exact path='/begin_reset_password' userLoggedIn={isLoggedIn} restricted={false} component={RequestPasswordReset}/>
                    <PublicRoute exact path='/reset_password' userLoggedIn={isLoggedIn} restricted={false} component={ResetPassword}/>
                    <PublicRoute path="/404" userLoggedIn={isLoggedIn} restricted={false} component={NotFoundPage} />
                    <Redirect to="/404"/>
                </Switch>    
            </React.Fragment> 
        )
    }
}

export default withRouter(Routes);