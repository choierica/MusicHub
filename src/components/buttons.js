import React from 'react';
import {connect} from 'react-redux';
import {increment} from '../actions/landingpage';

class Buttons extends React.Component {
    render() {
        return (<div>
                <textarea placeholder="Enter your message" rows="4" cols="50" id="msg_area">
                </textarea>
                <div className="boxed" align="center" id="post_messages">
                    Messages: {this.props.count}
                </div>
                <button onClick={() => this.props.increment(document.getElementById('msg_area').value)}>
                    Click Me!
                </button>
            </div>
        );

    }
}


const mapStateToProps = (state) => { //name is by convention
    return {count: state.count}; //now it will appear as props
}


export default connect(mapStateToProps, {increment})(Buttons);