import React, { Component } from 'react';
import {Card, Button, Modal, Form} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {addOrRemoveRecipeToMealplan } from '../services/actions/mealplan.js'
import { connect } from 'react-redux'
import image_placeholder from '../Assets/image_placeholder.jpg'
import CardControlPanel from './CardControlPanel.js'
import './RecipeCard.css'
import '../transversal CSS/button.css'


class RecipeCard extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            diplayAddToMealPlanModal: false,
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            guests: 2
        }
        this.redirectToRecipe = this.redirectToRecipe.bind(this)
        this.addToMealPlan = this.addToMealPlan.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addGuest = this.addGuest.bind(this)
        this.removeGuest = this.removeGuest.bind(this)
    }

    addGuest(){
        this.setState({guests: this.state.guests + 1})
    }

    removeGuest(){
        this.setState({guests: Math.max(1, this.state.guests - 1)})
    }

    redirectToRecipe(){
        let path = `/recipe/${this.props.recipe.name}`;
        this.props.history.push(path);
    }    

    addToMealPlan(){
        this.setState({diplayAddToMealPlanModal: true})
    }

    handleSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.formMeal.value === "") {
            console.log('plop')
        }else{
            this.props.addOrRemoveRecipeToMealplan('Add', this.props.mealplan.id, form.formDay.value, form.formMeal.value, this.props.recipe.id, this.state.guests)
            this.setState({diplayAddToMealPlanModal: false})
        }

    };

    handleClose(){
        this.setState({diplayAddToMealPlanModal: false})
    }

    renderDayOptions(){
        return(
            this.state.days.map((day)=>{
                return(
                    <option key={day}>{day}</option>
                )
            })
        )
    }

    renderAddToMealPlanModal(){
        return(
            <Modal show={this.state.diplayAddToMealPlanModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add {this.props.recipe.name} to your Mealplan</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.handleSubmit}>
                    <Modal.Body>
                            <Form.Group controlId="formDay">
                                <Form.Label>Day</Form.Label>
                                <Form.Control as="select" defaultValue={this.state.days.first}>
                                    {this.renderDayOptions()}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formMeal">
                                <Form.Label>Meal</Form.Label>
                                <Form.Control type="text" placeholder="Meal" />
                                <Form.Control.Feedback type="invalid">
                                    Cannot be empty
                                </Form.Control.Feedback>
                            </Form.Group>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>
                                Submit
                            </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }

    render() {

        return(
            <div className="recipeCard">
                {this.renderAddToMealPlanModal()}
                <Card>
                    <Card.Img onClick={this.redirectToRecipe} variant="top" src={image_placeholder} />
                    <Card.Body>
                        <Card.Title className="title" onClick={this.redirectToRecipe}>{this.props.recipe.name}</Card.Title>
                        <CardControlPanel addGuest={this.addGuest} removeGuest={this.removeGuest} guests={this.state.guests} className="controlPanel"/>
                        <Button className="button" variant="primary" onClick={this.addToMealPlan}>Add to MealPlan</Button>
                    </Card.Body>
                </Card>
            </div>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeCard));