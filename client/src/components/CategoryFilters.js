import React, { Component } from 'react';
import {Accordion, Card, Form, Button, ButtonGroup} from 'react-bootstrap';
import {addFilter, removeFilter, resetFilter, fetch_categories} from '../services/actions/categories.js'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import './CategoryFilters.css'


class CategoryFilters extends Component {
    constructor(props){
        super(props)
        this.state = {
            filters: ['Category 1', 'Category 2', 'Category 3','Category 4', 'Category 5', 'Category 6','Category 7', 'Category 8', 'Category 9',],
            promotedCategories: ['Popular', 'New', 'Favorites']
        }
        this.changeFilter = this.changeFilter.bind(this)
    }

    componentDidMount(){
        this.props.fetch_categories()
        this.props.resetFilter()
    }

    componentDidUpdate(prevProps){
        if(prevProps.categories !== this.props.categories){
            let categoriesNames = [];
            this.props.categories.map((category) => {
                categoriesNames.push(category.name)
                return null
            })
            this.setState({filters: categoriesNames})
        }
    }

    changeFilter(filter){
        if(this.props.filters.includes(filter)){
            this.props.removeFilter(filter, this.props.filters)
        }else if(filter==='rest'){
            this.props.resetFilter()
        }else{
            this.props.addFilter(filter, this.props.filters)
        }
    }

    renderPromotedCategories(){
        return(
            <ButtonGroup className='promotedCategories' aria-label="Basic example">
                {this.state.promotedCategories.map((category, key) =>{
                    return(
                            <Button key={key} variant="secondary">{category}</Button>
                    )
                })}
            </ButtonGroup>
        )
    }

    renderFilters(){
        return(
            <Accordion className="filters" defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Filters
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Form className='checkboxFrom'>
                            {this.state.filters.map((filter, key)=>{
                                return(
                                    <Form.Check className='checkbox' key={key} type='checkbox' id={filter} label={filter} onChange={()=>this.changeFilter(filter)}/>
                                )
                            })}
                        </Form>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
    

    render() {

        return(
            <div className="categoryFilters">
                {this.renderPromotedCategories()}
                {this.renderFilters()}
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories.categoriesList,
        filters: state.categories.filters
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        fetch_categories: () => dispatch(fetch_categories()),
        addFilter: (filter, filters) => dispatch(addFilter(filter, filters)),
        removeFilter: (filter, filters) => dispatch(removeFilter(filter, filters)),
        resetFilter: () => dispatch(resetFilter()),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryFilters));