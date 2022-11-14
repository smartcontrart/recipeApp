import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import './RecipeInformation.css'

class RecipeInformation extends Component {
    
    render() {
        return(
            <div className="recipeInformation">
                <Card className="card">
                    <Card.Body>
                        <div className="cardText">
                            <table className="preparationInformationTable">
                                <tbody>
                                    <tr>
                                        <td className="tableLabel"> Preparation time:</td>
                                        <td className="tableMeasure">{this.props.preparation_time} min</td>
                                    </tr>
                                    <tr>
                                        <td className="tableLabel">Cooking time:</td>
                                        <td className="tableMeasure">{this.props.cooking_time} min</td>
                                    </tr>
                                    <tr>
                                        <td className="tableLabel">Total time:</td>
                                        <td className="tableMeasure">{this.props.total_recipe_time} min</td>
                                    </tr>
                                </tbody>
                            </table>


                            <table className="nutritionInformationTable">
                                <tbody>
                                    <tr>
                                        <td className="tableLabel">Serves:</td>
                                        <td className="tableMeasure">{this.props.servings}</td>
                                    </tr>
                                    <tr>
                                        <td className="tableLabel">Calories:</td>
                                        <td className="tableMeasure">{this.props.calories} kcal</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            )
        }

}

export default withRouter(RecipeInformation);