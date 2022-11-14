import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Logout from '../components/Logout.js'
import UserPreferences from '../components/UserPreferences.js'
import PreviousMealplans from '../components/PreviousMealplans.js'
import './Profile.css'

class Profile extends Component {
    

    render() {

        return(
            <div className="profile">
                <div className="userPreferences">
                    <UserPreferences/>
                </div>
                <div className="logout">
                    <Logout/>
                </div>
                {/* <PreviousMealplans/> */}
            </div>
            )
        }

}

  export default withRouter(Profile);