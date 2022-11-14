import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import GroceriesList from '../components/GroceriesList.js'

class Bag extends Component {
    

    render() {

        return(
            <div className="bag">
                <GroceriesList/>
            </div>
            )
        }

}

  export default withRouter(Bag);