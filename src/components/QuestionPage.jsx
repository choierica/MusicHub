import React, {Component} from 'react';

const ListItem = ({ value }) => (
    <li>{value}</li>
  );
  
const List = ({ items }) => (
    <ul>
      {
        items.map((item, i) => <ListItem key={i} value={item} />)
      }
    </ul>
  );

class QuestionPage extends Component {
    state = {
        data: null,
        array: []
    };

    componentDidMount() {
        this.callBackendAPI()
            .then(res => this.setState({data: res.express}))
            .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.callBackendAPI()
            .then(res => {
                    const joined = this.state.array.concat(this.inputNode.value);
                    this.setState({array: joined})
                }
            )
            .catch(err => console.log(err));
    }


    render() {
        return (<div>
                <p>{this.state.data}</p>
                <form onSubmit={this.handleSubmit} method="post" action="/questions">
                    <label>
                        <input
                            type="text"
                            name="username"
                            ref={node => (this.inputNode = node)}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <List items={this.state.array}/>
            </div>
        );

    }
}


export default QuestionPage;