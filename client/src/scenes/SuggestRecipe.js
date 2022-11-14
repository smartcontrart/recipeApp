import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import SuggestRecipeForm from '../components/SuggestRecipeForm.js'

class SuggestRecipe extends Component {
    

    render() {

        return(
            <div className="suggestRecipe">
                <SuggestRecipeForm/>
            </div>
            )
        }

}

  export default withRouter(SuggestRecipe);