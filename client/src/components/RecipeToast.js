import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import {withRouter} from 'react-router-dom';
import {addOrRemoveRecipeToMealplan } from '../services/actions/mealplan.js'
import { connect } from 'react-redux'
import './RecipeToast.css'
import '../transversal CSS/button.css'


class RecipeToast extends Component {

        constructor(props){
        super(props)
        this.handleClose = this.handleClose.bind(this)
    }

    redirectToRecipe(){
        let path = `/recipe/${this.props.recipe.name}`;
        this.props.history.push(path);
    }

    handleClose(){
        this.props.addOrRemoveRecipeToMealplan("Remove", this.props.mealplan.id, this.props.day.name, this.props.meal.name, this.props.recipe.id, this.props.quantities_multiplicator.multiplicator)
    }    

    render() {

        return(
            <Toast className='recipeToast' onClose={this.handleClose}>
                <Toast.Header>
                    <strong className="mr-auto">{this.props.recipe.name}</strong>
                </Toast.Header>
                <Toast.Body>Guests: {this.props.quantities_multiplicator.multiplicator}</Toast.Body>
            </Toast>
            )
        }

}

const mapStateToProps = (state, ownProps) => {
    return {
      mealplan: state.mealplan,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        addOrRemoveRecipeToMealplan: (action, mealplan_id, day_name, meal_name, recipe_id, multiplicator) => dispatch(addOrRemoveRecipeToMealplan(action, mealplan_id, day_name, meal_name, recipe_id, multiplicator)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeToast));