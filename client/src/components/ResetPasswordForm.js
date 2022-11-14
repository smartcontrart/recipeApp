import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {resetPassword } from '../services/actions/auth.js'
import '../transversal CSS/button.css'

class resetPasswordForm extends Component {

        constructor(props){
        super(props)
        this.state = {
            validated: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } 
        this.props.resetPassword(event.currentTarget.formBasicPassword.value, event.currentTarget.formBasicPasswordConfirmation.value, this.props.history)
        this.setState({validated: true})
        event.preventDefault();
        event.stopPropagation();
    };
    

    render() {

        return(
            <div className="resetPasswordForm">
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>

                     <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a password.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPasswordConfirmation">
                        <Form.Label>Password confirmation</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a password.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button className="button" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
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
        resetPassword: (password, password_confirmation, history) => dispatch(resetPassword(password, password_confirmation, history)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(resetPasswordForm));