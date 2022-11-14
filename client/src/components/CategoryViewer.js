import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import RecipeCard from './RecipeCard.js'
import { connect } from 'react-redux'
import './CategoryViewer.css'

class CategoryViewer extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            recipes: this.props.filteredRecipes
        }
        this.renderRecipes = this.renderRecipes.bind(this)
    }

    componentDidUpdate(prevProps){
        if(prevProps.filteredRecipes !== this.props.filteredRecipes){
            this.setState({recipes: this.props.filteredRecipes})
        }
    }

    renderRecipes(){
        return(
            <React.Fragment>
                {this.state.recipes.map((recipe, key) =>{
                    return(
                        <RecipeCard key={key} isInMealPlan={false} recipe={recipe}/>
                    )
                })}
            </React.Fragment>
        )
    }

    render() {
        return(
            <div className="categoryViewer">
                {this.renderRecipes()}
            </div>
            )
        }

}

const mapStateToProps = (state, ownProps) => {
    return {
        filteredRecipes: state.categories.filteredRecipes
    }
}

export default withRouter(connect(mapStateToProps, null)(CategoryViewer));