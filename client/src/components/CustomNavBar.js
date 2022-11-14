import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import SearchResults from './SearchResults.js'
import './CustomNavBar.css'

class CustomNavBar extends Component {

    constructor(props) {
      super(props);
      this.state = {
        query: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.resetQuery = this.resetQuery.bind(this);
    }

    componentDidMount(){
      document.addEventListener("keydown", this.resetQuery, false);
      document.addEventListener("click", this.resetQuery, false);
    }

    componentWillUnmount(){
      document.removeEventListener("keydown", this.resetQuery, false);
      document.removeEventListener("click", this.resetQuery, false);
    }


    handleChange(event) {
      this.setState({query: event.target.value})
    }

    resetQuery = (event) => {
        if(event.keyCode === 27 || event.type==='click'){
            this.setState({query: ''})
        }
    }

    render() {

        return(
            <div className="customNavBar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Simmering</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="searchBar" onChange={this.handleChange}/>
                        <SearchResults query={this.state.query}/>
                    </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        {this.props.user ? <Nav.Link href="/mealplan">Mealplan</Nav.Link>: null}
                        <Nav.Link href="/browse">Browse</Nav.Link>
                        {this.props.user ? <Nav.Link href="/shopping_bag">My Cart</Nav.Link> : <Nav.Link href="/signup">Signup</Nav.Link>}
                        {this.props.user ? <Nav.Link href="/profile">Profile</Nav.Link>: <Nav.Link href="/login">Login</Nav.Link>}
                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </div>
            )
        }

}

  const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user
    }
  }

export default withRouter(connect(mapStateToProps, null)(CustomNavBar));