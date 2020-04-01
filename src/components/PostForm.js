import React, {Component} from "react";

export default class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    submitHandler = event => {
        event.preventDefault()
    };

    changeInputHandler = event => {
        event.persist();
        this.setState(prevState => ({
            ...prevState,
            ...{[event.target.name]: event.target.value}
            }))
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Post title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button type="submit" className="btn btn-success">Create</button>
            </form>
        );
    }
}