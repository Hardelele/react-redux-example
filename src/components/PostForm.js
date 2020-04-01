import React, {Component} from "react";
import {connect} from "react-redux";
import {createPost} from "../redux/actions";

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state;
        const newPost = {
            title, id: Date.now().toString()
        };

        this.props.createPost(newPost);
        this.setState({title:''})
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

const mapDispatchToProps = {
    createPost
};

export default connect(null, mapDispatchToProps)(PostForm)