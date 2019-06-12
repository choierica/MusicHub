import React, {Component} from 'react';


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

        // console.log(event.target[0].value)
        // console.log(event.target.elements.username.value)
        // console.log(event.target.username.value)
        // console.log(this.inputNode.value)
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
                <button>{this.state.array}</button>
            </div>
        );

    }
}


export default QuestionPage;