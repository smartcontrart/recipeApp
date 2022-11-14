import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
// import { fetchRecipe } from '../services/actions/recipe.js'
import './CardControlPanel.css'

class CardControlPanel extends Component {
    
    constructor(props){
        super(props)
        this.state={
            guests: 2,
            recipeCalories: 160,
            recipeCookingTime: 50,
        }
        
    }
    
  

    render() {


        return(
            <div className="cardControlPanel">
                <div className="recipeInformation">
                    <span className="recipeCalories">
                        Cal: {this.state.recipeCalories}
                    </span>
                    <span className="recipeCookingTime">
                        Toc: {this.state.recipeCookingTime}
                    </span>
                </div>
                <div className="guestControls">
                    <div className="guestControlButtons">
                        <button className="guestButton plus" onClick={this.props.addGuest}>+</button>
                        <button className="guestButton minus" onClick={this.props.removeGuest}>-</button>
                    </div>
                    <div className="guestCounter">{this.props.guests}</div>
                </div>

            </div>
            )
        }

}

const mapStateToProps = (state, ownProps) => {
    return {
      recipedata: state.recipe.recipe,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchRecipe: (recipe_name) => dispatch(fetchRecipe(recipe_name)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardControlPanel));