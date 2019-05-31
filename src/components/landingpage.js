import React, {Component} from 'react';
import '../style/landingpage.css';
import Buttons from './buttons';

class LandingPage extends Component {
    render() {
        return(
            <div><h1>Landing</h1>

                <Buttons/>
            </div>

        )
    }
}


export default LandingPage;