import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import {searchRecipes} from '../services/actions/searchRecipes.js'
import { connect } from 'react-redux'
import './SearchResults.css'

class SearchResults extends Component {

    constructor(props){
        super(props)
        this.state={
            results: []
        }
        this.resetState = this.resetState.bind(this)
    }
    

    componentDidUpdate(prevProps){
        if(prevProps.query !== this.props.query){
            if(this.props.query && this.props.query.length >= 1){
                this.props.searchRecipes(this.props.query)
                this.setState({results: this.props.results})
            } else if (!this.props.query){
                this.setState({
                    results: []               
                })
            }
        }
    }

   

    resetState(){
        this.setState({results: []})
    }

    renderResults(){
        if(this.state.results[0]){
            return(
                <div className="searchResults">
                    {this.state.results.map((result, key)=>{
                        return(
                            <React.Fragment>
                                <Link to={`/recipe/${result}`} onClick={this.resetState}>{result}</Link>
                                <br/>
                            </React.Fragment>
                        )
                    })}
                </div>
            )
        }
    }

    render() {

        return(
            <React.Fragment>
                {this.renderResults()}
            </React.Fragment>
            )
        }

}


const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      results: state.searchResults.searchResults
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        searchRecipes: (query) => dispatch(searchRecipes(query)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));