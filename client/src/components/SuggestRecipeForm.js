import React, { Component } from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './SuggestRecipeForm.css'
import '../transversal CSS/button.css'

class SuggestRecipeForm extends Component {

        constructor(props){
        super(props)
        this.state = {
            validated: false,
            numberOfIngredients: 1,
            numberOfInstructionsSteps: 1,
            unitsOptions: ['g', 'mg', 'tsp', 'tbsp']
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderIngredients = this.renderIngredients.bind(this)
        this.removeIngredientField = this.removeIngredientField.bind(this)
        this.removeInstructionField = this.removeInstructionField.bind(this)
        this.renderUnitsOptions = this.renderUnitsOptions.bind(this)
    }

    handleSubmit(event){
        const form = event.currentTarget;
        console.log(event.currentTarget.formBasicEmail.value)
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } 
        this.setState({validated: true})
    };

    removeIngredientField(){
        this.setState({numberOfIngredients: this.state.numberOfIngredients - 1})
    }

     removeInstructionField(){
        this.setState({numberOfInstructionsSteps: this.state.numberOfInstructionsSteps - 1})
    }

    renderUnitsOptions(){
        return(
            this.state.unitsOptions.map((unit, key) => {
                return(
                    <option key={key}>{unit}</option>
                )
            })
        )
    }

    renderIngredients(){
        let ingredients = []
        for(let i = 0; i < this.state.numberOfIngredients; i ++){
            ingredients.push(
                <React.Fragment key={i}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label as= {Col}>Measure</Form.Label>
                            <Form.Control type="text" required/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label className='formDropDown'>Measure</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                {this.renderUnitsOptions()}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label as= {Col}>Ingredient</Form.Label>
                            <Form.Control type="text" required/>
                        </Form.Group>
                        <Form.Group as={Col} className="removeGroup">
                            {i === (this.state.numberOfIngredients - 1) && (this.state.numberOfIngredients > 1) ? <Button className="button removeIngredientButton" variant="secondary" onClick={this.removeIngredientField}>-</Button> : null}
                        </Form.Group>
                    </Form.Row>
                </React.Fragment>
            )
        }
        return ingredients
    }

    renderInstructions(){
        let instructions = []
        for(let i = 0; i < this.state.numberOfInstructionsSteps; i ++){
            instructions.push(
                <Form.Row key={i} className="instructionsRow">
                    <Form.Group as={Col}>
                        <Form.Label>Step {i+1}</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group as={Col} className="removeGroup removeInstruction">
                        {i === (this.state.numberOfInstructionsSteps - 1) && (this.state.numberOfInstructionsSteps > 1) ? <Button variant="secondary" className='removeButton' onClick={this.removeInstructionField}>-</Button> : null}
                    </Form.Group>
                </Form.Row>
            )
        }
        return instructions
    }

    addToState(type){
        if(type === 'ingredient'){
            this.setState({numberOfIngredients: this.state.numberOfIngredients + 1})
        }else if (type === 'instruction'){
            this.setState({numberOfInstructionsSteps: this.state.numberOfInstructionsSteps + 1})
        }
    }

    render() {
        return(
            <div className="login">
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Recipe Name</Form.Label>
                            <Form.Control type="text"  placeholder="Recipe Name" required/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a recipe name!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Label>Ingredients</Form.Label>
                    </Form.Row>
                    {this.renderIngredients()}
                    <Form.Row>
                        <Button variant="secondary" type="button" onClick={()=>this.addToState('ingredient')}> Add Ingredient </Button>
                    </Form.Row>
                    <br/>
                    <Form.Row>
                        <Form.Label>Instructions</Form.Label>
                    </Form.Row>
                        {this.renderInstructions()}
                    <Form.Row>
                        <Button variant="secondary" type="button" onClick={()=>this.addToState('instruction')}> Add Instruction</Button>
                    </Form.Row>
                    <br/>
                    <Form.Row>
                        <Button className="button" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Row>
                </Form>
            </div>
            )
        }

}

  export default withRouter(SuggestRecipeForm);