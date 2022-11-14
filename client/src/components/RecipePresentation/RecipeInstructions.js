import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import './RecipeInstructions.css'

class RecipeInstructions extends Component {
    
    constructor(props){
        super(props)
        this.state={
            instructions: [],
            instructionsLoaded: false,

        }
        this.renderInstructions = this.renderInstructions.bind(this)
    }

    componentDidUpdate(prevProps){
        if(prevProps.recipedata.recipe !==  this.props.recipedata.recipe){
            this.setState({ instructions: [this.props.recipedata.recipe.instructions],
                            instructionsLoaded: true})
        }
    }

    renderInstructions(){
        if(this.state.instructionsLoaded){
            return(
                <ol>
                {this.state.instructions.map((instruction, key)=>{
                    return(
                        <li key={key}>{instruction}</li>
                    )
                })}
                </ol>
            )
        }
    }

    render() {

        return(
            <div className="recipeInstructions">
                <Card className="card">
                    <Card.Body>
                        <div className="cardText">
                            {this.renderInstructions()}
                        </div>
                    </Card.Body>
                </Card>
            </div>
            )
        }

}

  const mapStateToProps = (state, ownProps) => {
    return {
      recipedata: state.recipe.recipe,
    }
  }

export default withRouter(connect(mapStateToProps, null)(RecipeInstructions));