import React, { Component } from "react";
import "../style/questionpage.css";
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

  removeTodo(name, i) {
    let todos = this.state.array.slice();
    todos.splice(i, 1);
    this.setState({
      array: todos
    });
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  handleSubmit = event => {
    event.preventDefault();
    this.callBackendAPI()
      .then(res => {
        const joined = this.state.array.concat(this.inputNode.value);
        this.setState({ array: joined });
      })
      .catch(err => console.log(err));
    console.log(this.state.array.length);
  };

  render() {
    return (
      <div id="body">
        <p>{this.state.data}</p>
        <form onSubmit={this.handleSubmit} method="post" action="/questions">
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
        <List>
          {this.state.array.map((item, i) => {
            return (
              <ListItem>
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
        </List>
      </div>
    );
  }
}

export default QuestionPage;
