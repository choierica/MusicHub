import React, {Component} from 'react';
import '../style/landingpage.css';
import Buttons from './buttons';

class LandingPage extends Component {
    render() {
        return(
            <div><h1>Landing</h1>
                <textarea placeholder="Enter your message" rows="4" cols="50" id="msg_area">
                    hello
                </textarea>
                <Buttons/>
            </div>

        )
    }
}


export default LandingPage;