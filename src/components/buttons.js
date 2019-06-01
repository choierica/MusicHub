import React from 'react';
import {connect} from 'react-redux';
import {increment} from '../actions/landingpage';


class Buttons extends React.Component {
    render() {
        return (<div>
                <textarea placeholder="Add to your Dictionary!" rows="4" cols="50" id="msg_area">
                </textarea>

                <div className="boxed" align="center" id="post_messages">
                    ADD TO YOUR DICTIONARY: {this.props.count}
                </div>
                <button id= "buttons" onClick={() => this.props.increment(document.getElementById('msg_area').value)}>
                    ADD
                </button>
            </div>
        );

    }
}


const mapStateToProps = (state) => { //name is by convention
    return {count: state.count}; //now it will appear as props
}


export default connect(mapStateToProps, {increment})(Buttons);