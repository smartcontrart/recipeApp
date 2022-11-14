import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {Accordion, Card} from 'react-bootstrap';
import {fetchUserLastMealPlan } from '../services/actions/mealplan.js'
import MealViewer from './MealViewer.js'


class MealPlanFilters extends Component {
    
    constructor(props){
        super(props)
        this.state={
            daysList: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Friday"],
        }
        this.renderDays = this.renderDays.bind(this)
    }


    componentDidMount(){
        this.props.fetchUserLastMealPlan()
    }


    renderDays(){
        return(
            this.props.mealplan.days.map((day, key) =>{
                return(
                    <Card key={key}>
                        <Accordion.Toggle  as={Card.Header} eventKey={key+1}>
                            {day.name}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={key+1}>
                            <Card.Body>
                                <MealViewer day={day} meals={day.meals}/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            })
        )
    }


    render() {
        return(
            <div className="mealplanFilter">
                <Accordion defaultActiveKey="0">
                    {this.renderDays()}
                </Accordion>
            </div>
            )
        }

}

  const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      mealplan: state.mealplan
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        fetchUserLastMealPlan: () => dispatch(fetchUserLastMealPlan()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MealPlanFilters));