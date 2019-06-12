import React, {Component} from 'react';
import '../style/landingpage.css';
import Buttons from './Buttons';


class LandingPage extends Component {


    render() {
        return(
            <div id="input">
                <iframe title="myFrame"
                        className="youtube-frame"
                        src={`https://www.youtube.com/embed/DfWkxpdOEP8?autoPlay=1`}
                        frameBorder="0"
                />
                <Buttons/>
            </div>

        )
    }
}


export default LandingPage;