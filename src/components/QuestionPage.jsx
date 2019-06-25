import React, {Component} from "react";
import "../style/questionpage.css";
import {connect} from "react-redux";
import {setInitial, addContent, deleteContent} from "../actions/landingpage";
import TextArea from "../components/TextArea";
import ListArea from "../components/ListArea";


class QuestionPage extends Component {

    componentDidMount() {
        const parent = this;
        parent
            .callBackendAPI()
            .then(res => parent.props.setInitial(res.express))
            .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch("/questions");
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        return (
            <div id="body">
                <TextArea/>
                <ListArea/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {count: state.count};
};

export default connect(
    mapStateToProps,
    {setInitial, addContent, deleteContent}
)(QuestionPage);
