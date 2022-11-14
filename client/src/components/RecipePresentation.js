import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchRecipe } from '../services/actions/recipe.js'
import RecipeImageCarousel from './RecipePresentation/RecipeImageCarousel.js'
import RecipeInformation from './RecipePresentation/RecipeInformation.js'
import RecipeIngredients from './RecipePresentation/RecipeIngredients.js'
import RecipeInstructions from './RecipePresentation/RecipeInstructions.js'

class RecipePresentation extends Component {
    
    constructor(props){
        super(props)
        this.state={
            recipe: {},
            ingredients: [],
            quantities: []
        }
    }


    componentDidUpdate(prevProps){
        if(prevProps.recipedata.recipe !==  this.props.recipedata.recipe){
            this.setState({ recipe: this.props.recipedata.recipe,
                            ingredients: this.props.recipedata.ingredients,
                            quantities: this.props.recipedata.quantities})
        }
        let recipeName = window.decodeURIComponent(window.location.pathname)
        recipeName = recipeName.replace("/recipe/", "")
        if(recipeName !== this.state.recipe.name){
            this.props.fetchRecipe(recipeName)
        }
    }

    componentDidMount(){
        let recipeName = window.decodeURIComponent(window.location.pathname)
        recipeName = recipeName.replace("/recipe/", "")
        this.props.fetchRecipe(recipeName)
    }

    render() {


        return(
            <div className="recipePresentation">
                {/* <RecipeImageCarousel images={this.state.recipe.images}/> */}
                <RecipeImageCarousel images={[]}/>
                <RecipeInformation preparation_time={this.state.recipe.preparation_time}
                                    cooking_time={this.state.recipe.cooking_time}
                                    total_recipe_time={this.state.recipe.total_recipe_time}
                                    calories={this.state.recipe.calories}
                                    servings={this.state.recipe.default_servings}/>

                <RecipeIngredients ingredients={this.state.ingredients}
                                    quantities={this.state.quantities}/>

                <RecipeInstructions instructions={this.state.recipe.instructions}/>
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
        fetchRecipe: (recipe_name) => dispatch(fetchRecipe(recipe_name)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipePresentation));