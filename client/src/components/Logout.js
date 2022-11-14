import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {logout } from '../services/actions/auth.js'
import Button from 'react-bootstrap/Button'
import '../transversal CSS/button.css'

class Logout extends Component {
    

    render() {

        return(
            <div className="logout">
                <Button className="button" onClick={()=>{this.props.logout(this.props.history)}}>Logout</Button>
            </div>
            )
        }

}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        logout: (history) => dispatch(logout(history)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));