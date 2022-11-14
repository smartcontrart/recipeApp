import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import MealPlanFilters from '../components/MealPlanFilters.js'

class Mealplan extends Component {
    

    render() {

        return(
            <div className="mealplan">
                <MealPlanFilters/>
            </div>
            )
        }

}

  export default withRouter(Mealplan);