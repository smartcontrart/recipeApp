import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class NotFoundPage extends Component {
    

    render() {

        return(
            <div className="notFoundPage">
                Not Found
            </div>
            )
        }

}

  export default withRouter(NotFoundPage);