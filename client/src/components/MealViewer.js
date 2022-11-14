import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import RecipeToast from './RecipeToast.js'
import './MealViewer.css'


class MealViewer extends Component {
    
    constructor(props){
        super(props)
        this.state={
            mealList: [{name: "Breakfast", recipes: ["recipe1", "recipe2", "recipe3", "recipe4"]}, {name: "Lunch", recipes: ["recipe3", "recipe4"]}, {name: "Dinner", recipes: ["recipe5", "recipe6"]}],
        }
        this.renderMealViewer = this.renderMealViewer.bind(this)
        this.renderMealRecipes = this.renderMealRecipes.bind(this)
    }

    retrieveRecipeQuantitiesMultiplicator(recipe_id, quantities_multiplicators){
        let quantities_multiplicator
        quantities_multiplicators.map((multiplicator) => {
            if(multiplicator.recipe_id === recipe_id){
                quantities_multiplicator =  multiplicator
            }
            return null
        })  
        return quantities_multiplicator
    }

    renderMealRecipes(meal, quantities_multiplicators){
        let recipe_quantities_multiplicator
        return(
            <div className="mealRecipes">
                {meal.recipes.map((recipe, key) =>{
                    recipe_quantities_multiplicator = this.retrieveRecipeQuantitiesMultiplicator(recipe.id, quantities_multiplicators)
                    return(
                        <RecipeToast key={key} day={this.props.day} meal={meal} recipe={recipe} quantities_multiplicator={recipe_quantities_multiplicator}/>
                    )
                })}
            </div>
        )
    }

    renderMealViewer(){
        return(
            this.props.meals.map((meal, key) =>{
                return(
                    <div className="meal" key={key}>
                        <div className="mealTitle">{meal.name}</div>
                        {this.renderMealRecipes(meal, meal.quantities_multiplicators)}
                    </div>
                )
            })
        )
    }


    render() {
        return(
            <div className="mealViewer">
                {this.renderMealViewer()}
            </div>
            )
        }

}

  export default withRouter(MealViewer);