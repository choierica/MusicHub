import React from 'react';


class NameForm extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target[0].value)
        console.log(event.target.elements.username.value)
        console.log(event.target.username.value)
        console.log(this.inputNode.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} method="POST" action="/questions" >
                <label>
                    Name:
                    <input
                        type="text"
                        name="username"
                        ref={node => (this.inputNode = node)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default NameForm;