import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import CategoryViewer from '../components/CategoryViewer.js'
import CategoryFilters from '../components/CategoryFilters.js'

class Browse extends Component {
    

    render() {

        return(
            <div className="browse">
                <CategoryFilters/>
                <CategoryViewer/>
            </div>
            )
        }

}

  export default withRouter(Browse);