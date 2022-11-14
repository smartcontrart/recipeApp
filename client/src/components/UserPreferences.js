import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../transversal CSS/button.css'


class UserPreferences extends Component {
    
    constructor(props){
        super(props)
        this.state={
            defaultNumberOfGuests: 2,
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        }
    }

    renderDaysOptions(){
        return(
            this.state.days.map((day, key)=>{
                return(
                    <option key={key}>{day}</option>
                )
            })
        )
    }
    render() {

        return(
            <div className="userPreferences">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Default Number of guests</Form.Label>
                        <Form.Control type="text" placeholder={this.state.defaultNumberOfGuests} />
                    </Form.Group>

                    <Form.Group controlId="formGridState">
                        <Form.Label>Prefered first day of the week</Form.Label>
                        <Form.Control as="select" defaultValue="Monday">
                            {this.renderDaysOptions()}
                        </Form.Control>
                    </Form.Group>

                        <br/>
                        <div>Diet Restrictions</div>
                        {/* <br/> */}
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Gluten free" />
                        <Form.Check type="checkbox" label="Lactose intolerant" />
                        <Form.Check type="checkbox" label="Vegetarian" />
                        <Form.Check type="checkbox" label="Vegan" />
                    </Form.Group>
                        <br/>
                        <div>Allergies</div>
                        {/* <br/> */}
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Milk" />
                        <Form.Check type="checkbox" label="Eggs" />
                        <Form.Check type="checkbox" label="Soy" />
                        <Form.Check type="checkbox" label="Wheat" />
                        <Form.Check type="checkbox" label="Lactose" />
                        <Form.Check type="checkbox" label="Peanut" />
                        <Form.Check type="checkbox" label="Tree Nuts" />
                        <Form.Check type="checkbox" label="Fish" />
                        <Form.Check type="checkbox" label="Shellfish" />
                    </Form.Group>

                    <Button className="button" variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
            )
        }

}

  export default withRouter(UserPreferences);