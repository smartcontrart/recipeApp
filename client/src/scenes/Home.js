import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Home extends Component {
    

    render() {

        return(
            <div className="home">
                Home
            </div>
            )
        }

}

  export default withRouter(Home);