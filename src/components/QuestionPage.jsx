import React, { Component } from "react";
import "../style/questionpage.css";
import { connect } from "react-redux";
import { increment, setInitial, addContent } from "../actions/landingpage";

import {
  List,
  ListItem,
  ListItemContent,
  ListItemAction,
  Icon
} from "react-mdl";

class QuestionPage extends Component {
  state = {
    data: null,
    array: []
  };

  removeTodo = async(name, i) => {
    const response = await fetch("/questions/" + i, {
     method: 'DELETE'
          });
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message);
      }
    this.props.setInitial(body.response);
    return body;
    // let todos = this.state.array.slice();
    // todos.splice(i, 1);
    // this.setState({
    //   array: todos
    // });
  }



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

  callPostAPI = async() => {
    const input = {body: this.inputNode.value}; 
    const response = await fetch("/post", {
        method: 'POST',  
        body: JSON.stringify(input),  
        headers:{
          'Content-Type': 'application/json'
         }
          });
    const body = await response.json()
    if (response.status !== 200) {
        throw Error(body.message);
      }
    return body;
  };

//   callDeleteAPI = async(i) => {
//     const response = await fetch("/question/" + i, {
//         method: 'DELETE'
//           });
//     const body = await response.json()
//     if (response.status !== 200) {
//         throw Error(body.message);
//       }
//     return body;
//   };

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
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              placeholder="Post Questions for Me!"
              type="text"
              name="username"
              ref={node => (this.inputNode = node)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <List style={{ width: "650px" }}>
          {this.props.count.map((item, i) => {
            return (
              <ListItem key={i} threeLine>
                <ListItemContent
                  avatar="person"
                  subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">
                  {item}
                </ListItemContent>
                <ListItemAction>
                  <Icon
                    name="star"
                    onClick={() => {
                      this.removeTodo(item, i);
                    }}
                  />
                </ListItemAction>
              </ListItem>
            );
          })}
        </List>
{/* 
        <List style={{ width: "650px" }}>
          {this.state.array.map((item, i) => {
            return (
              <ListItem key={i}>
                <ListItemContent avatar="person">{item}</ListItemContent>
                <ListItemAction>
                  <Icon
                    name="star"
                    onClick={() => {
                      this.removeTodo(item, i);
                    }}
                  />
                </ListItemAction>
              </ListItem>
            );
          })}
        </List> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { count: state.count };
};

export default connect(
  mapStateToProps,
  { increment, setInitial, addContent }
)(QuestionPage);
