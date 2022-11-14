import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import RecipePresentation from '../components/RecipePresentation.js'

class Recipe extends Component {
    

    render() {

        return(
            <div className="recipe">
                <RecipePresentation/>
            </div>
            )
        }

}

  export default withRouter(Recipe);