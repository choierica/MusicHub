import React, {Component} from "react";
import "../style/questionpage.css";
import {connect} from "react-redux";
import {setInitial, addContent} from "../actions/landingpage";
import Loading from "./Loading";
import Popup from "reactjs-popup";
import Sound from "react-sound";
import SoundFile from "../sounds/Seong-Jin Cho - Claude Debussy Clair de lune [Suite bergamasque, L. 75].mp3";

import {
    List,
    ListItem,
    ListItemContent,
    ListItemAction,
    Icon
} from "react-mdl";

class QuestionPage extends Component {

    removeTodo = async (name, i) => {
        const response = await fetch("/questions/" + i, {
            method: 'DELETE'
        });
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        this.props.setInitial(body.response);
        return body;
    };


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
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    callPostAPI = async () => {
        const input = {body: this.inputNode.value};
        const response = await fetch("/post", {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    handleSubmit = event => {
        event.preventDefault();
        const parent = this;
        parent
            .callPostAPI()
            .then(res => {
                    parent.props.addContent(res.response)
                }
            )
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div id="body">
                <Sound
                    url={SoundFile}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={300 /* in milliseconds */}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                />
                <div id="inner">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input
                                placeholder="Please post your favourite music"
                                type="text"
                                name="username"
                                ref={node => (this.inputNode = node)}
                            />
                        </label>
                        <button id="buttons" type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    <List style={{width: "auto"}} id="post_messages">
                        {this.props.count.map((item, i) => {
                            return (
                                <ListItem key={i} threeLine>
                                    <ListItemContent
                                        avatar="person">
                                        Anonymous
                                        <Popup trigger={<p>{item}</p>} position="top center" closeOnDocumentClick on="hover">
                                            <a href={item}>
                                                <div>{"Let"}</div>
                                            </a>
                                        </Popup>
                                    </ListItemContent>
                                    <ListItemAction>
                                        <Icon
                                            name="delete_outline"
                                            onClick={() => {
                                                this.removeTodo(item, i);
                                            }}
                                        />
                                    </ListItemAction>
                                </ListItem>
                            );
                        })}
                    </List>
                    <Loading/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {count: state.count};
};

export default connect(
    mapStateToProps,
    {setInitial, addContent}
)(QuestionPage);
