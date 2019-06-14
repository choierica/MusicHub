import React, { Component } from "react";
import "../style/questionpage.css";
import {connect} from 'react-redux';
import {increment} from '../actions/landingpage';
import {setInitial} from '../actions/landingpage';

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

//   componentDidMount() {
//     this.callBackendAPI()
//       .then(res => this.setState({ data: res.express }))
//       .catch(err => console.log(err));
//   }
  componentDidMount() {
    const parent = this;
    parent.callBackendAPI()
      .then(res => parent.props.setInitial(res.express))
      .catch(err => console.log(err));
      console.log(parent.props.count);
  }

  callBackendAPI = async () => {
    const response = await fetch("/questions");
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
  };

  render() {
    return (
      <div id="body">
          {/* <p>{this.state.data}</p> */}
          <List style={{width: '650px'}}>
          {this.props.count.map((item, i) => {
            return (
              <ListItem
                  key= {i}
                  threeLine>
                  <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">{item}</ListItemContent>
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
              <ListItem
                  key= {i}>
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

const mapStateToProps = (state) => { 
    return {count: state.count}; 
}


export default connect(mapStateToProps, {increment, setInitial})(QuestionPage);
// export default QuestionPage;
