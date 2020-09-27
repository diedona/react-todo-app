import React, { Component } from 'react';

const descriptionStyle = {
    marginTop: "10px",
    marginRight: "15px"
}

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

        if (!this.state.title) {
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
                <form onSubmit={(e) => this.onSubmit(e)} className="form-container">
                    <label style={descriptionStyle}>Description: </label>
                    <input type="text"
                        className="input-text"
                        value={this.state.title}
                        onChange={(e) => this.onChange(e)}
                        name="title"
                        placeholder="Describe the to-do" />
                    <button className="input-submit"
                        type="submit">
                        Add
                    </button>
                </form>
            </div>
        )
    };
}

export default InputTodo;