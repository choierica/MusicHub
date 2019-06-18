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
                        British Columbia. I am currently studying Computer Science, and I created Active as a platform for people to share their hobbies.
                        Some of my own hobbies are: singing, playing piano and dancing.
                        This summer, I'm working on a project called "fresh". If you're interested in looking into some of my past project,
                        check out the link in the navigation bar!
                    </p>
                </div>
            </div>
        )
    }
}


export default About;