import React, { Component } from 'react';

class InputTodo extends Component {

    constructor(props) {
        super();
        this.state = {
            title: ''
        };
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if(!this.state.title) {
            alert('Preencha o título desgraça');
            return;
        }

        this.props.addTodo(this.state.title);
        this.setState({
            title: ""
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <label>Description: </label>
                    <input type="text"
                        value={this.state.title}
                        onChange={(e) => this.onChange(e)}
                        name="title"
                        placeholder="Describe the to-do" />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    };
}

export default InputTodo;