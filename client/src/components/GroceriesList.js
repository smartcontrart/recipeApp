import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Form} from 'react-bootstrap';
import { connect } from 'react-redux'
import './GroceriesList.css'

class GroceriesList extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         groceriesList: [
    //             'ingredient 1',
    //             'ingredient 2',
    //             'ingredient 3',
    //             'ingredient 4',
    //             'ingredient 5'
    //         ]
    //     }
    // }

    renderGroceriesList(){
        if(this.props.groceriesList.isLoaded){
            return(
                <ul className='groceriesListForm'>
                    {this.props.groceriesList.ingredients.map((ingredient, key)=>{
                        console.log(this.props.groceriesList.quantities)
                        let quantity = this.props.groceriesList.quantities.find(quantity => quantity.ingredient_id === ingredient.id)
                        let label = quantity.measure + " " + quantity.unit + " " + ingredient.name
                        return(
                            <li className='groceriesListCheckbox' key={key} id={ingredient.id}>{label}</li>
                        )
                    })}
                </ul>
            )
        }
    }


    render() {

        return(
            <div className="groceriesList">
                <h3>Groceries List</h3>
                {this.renderGroceriesList()}
            </div>
            )
        }

}

const mapStateToProps = (state, ownProps) => {
    return {
        groceriesList: state.groceriesList
    }
}

export default withRouter(connect(mapStateToProps, null)(GroceriesList));