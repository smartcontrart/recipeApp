import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {resendConfirmationEmail } from '../services/actions/auth.js'
import '../transversal CSS/button.css'

class ResendConfirmationEmailFrom extends Component {

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
        this.props.resendConfirmationEmail(event.currentTarget.formBasicEmail.value)
        this.setState({validated: true})
        event.preventDefault();
        event.stopPropagation();
    };
    

    render() {

        return(
            <div className="resetPasswordForm">
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Resend confirmation email</Form.Label>
                        <Form.Control type="email" placeholder="email" required/>
                        <Form.Control.Feedback type="invalid">
                            Email invalid
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
        resendConfirmationEmail: (email) => dispatch(resendConfirmationEmail(email)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResendConfirmationEmailFrom));