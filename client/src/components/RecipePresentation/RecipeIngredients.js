import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import './RecipeIngredients.css'

class RecipeIngredients extends Component {
    constructor(props){
        super(props)
        this.state={
            ingredients: [],
            quantities: []
        }
        this.renderIngredientList = this.renderIngredientList.bind(this)
    }

    componentDidUpdate(prevProps){
        if(prevProps.ingredients !== this.props.ingredients){
            let sortedIngredients = this.sortArrayOfObjects(this.props.ingredients)
            this.setState({ingredients: sortedIngredients})
        }
        if(prevProps.quantities !== this.props.quantities){
            let sortedQuantities = this.sortArrayOfObjects(this.props.quantities)
            this.setState({quantities: sortedQuantities})
        }
        
    }

    sortArrayOfObjects(array){
        if(array[0].ingredient_id){
            return array.sort((a, b) => (a.ingredient_id > b.ingredient_id) ? 1 : -1)
        }else{
            return array.sort((a, b) => (a.id > b.id) ? 1 : -1)
        }
    }

    renderIngredientList(){
        if(this.state.ingredients){
            if(this.state.ingredients[0]){
                return(
                    <ul className="ingredientList">
                        {this.state.ingredients.map((ingredient, key)=>{
                            return(
                                <li className="ingredient" key={key}>{this.state.quantities[key].measure} {this.state.quantities[key].unit} {ingredient.name}</li>
                            )
                        })}
                    </ul>
                )
            }
        }
    }


    render() {

        return(
            <div className="recipeIngredients">
                <Card className="card">
                    <Card.Body>
                        <div className="cardText">
                            {this.renderIngredientList()}
                        </ div>
                    </Card.Body>
                </Card>
            </div>
            )
        }

}

  export default withRouter(RecipeIngredients);