import React, {Component} from "react";
import "../style/questionpage.css";
import {connect} from "react-redux";
import {setInitial, addContent, deleteContent} from "../actions/landingpage";
import {
    List,
    ListItem,
    ListItemContent,
    ListItemAction,
    Icon
} from "react-mdl";
// import Popup from "reactjs-popup";
import Modal from "./Modal";


class ListArea extends Component {

    removeTodo = async (name, i) => {
        await fetch("/questions/" + i, {
            method: 'DELETE'
        });
        this.props.deleteContent(i);
    };

    render() {
        return (
            <div>
                <List style={{width: "auto"}} id="post_messages">
                    <Modal/>
                    {this.props.count.map((item, i) => {
                        return (
                            <ListItem key={i} threeLine>
                                <ListItemContent
                                    avatar="person">
                                    Anonymous
                                    {/* <Popup trigger={<p>{item.body}</p>} position="top center" closeOnDocumentClick
                                           on="hover">
                                        <a href={"https://www.youtube.com/results?search_query=" + item.body}>
                                            <div>{item.body}</div>
                                        </a>
                                    </Popup> */}
                                </ListItemContent>
                                <ListItemAction>
                                    <Icon
                                        name="delete_outline"
                                        onClick={() => {
                                            this.removeTodo(item, item._id);
                                        }}
                                    />
                                </ListItemAction>
                            </ListItem>
                        );
                    })}
                </List>
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
)(ListArea);