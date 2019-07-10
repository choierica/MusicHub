import React, {Component} from 'react';
import '../style/aboutme.css';
import picture from '../photos/profilePic.png';

class About extends Component {
    render() {
        return(
            <div id="outer">
                <div className="dhn-info-div0">
                    <img src= {picture}  alt=""/>
                    <p> Hello everyone! My name is Erica, and I'm a fourth year undergraduate student at the University of
                        British Columbia. I am currently studying Computer Science, and I created MusicHub as a platform for people to share their favorite music..
                        Feel free to listen to what I have shared on the main page, and please post your own favorites as well!
                    </p>
                </div>
            </div>
        )
    }
}


export default About;