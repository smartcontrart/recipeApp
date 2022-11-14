import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {login } from '../services/actions/auth.js'
import '../transversal CSS/button.css'

class LoginForm extends Component {

        constructor(props){
        super(props)
        this.state = {
            validated: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } 
        this.props.login(event.currentTarget.formBasicEmail.value, event.currentTarget.formBasicPassword.value, this.props.history)
        event.preventDefault();
        event.stopPropagation();
        this.setState({validated: true})
    };
    

    render() {

        return(
            <div className="login">
                <Form validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"  placeholder="Enter email" required/>
                        {/* <Form.Control.Feedback type="invalid">
                            Please provide a valid email
                        </Form.Control.Feedback> */}
                    </Form.Group>

                     <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                        {/* <Form.Control.Feedback type="invalid">
                            Please provide a password.
                        </Form.Control.Feedback> */}
                    </Form.Group>
                    
                    <div style={{color: "red"}}>
                        {this.props.loginError}
                    </div>

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
      user: state.auth.user,
      loginError: state.auth.loginErrorMessage
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password, history) => dispatch(login(email, password, history)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));