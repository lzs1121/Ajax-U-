import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';
import post from '../Post/Post';

// state, loadedPost;
// cdu, condition: props id, not loadedpost or is LP but not props id, axios-get(url) and then(cb, setState)
// show content, if=> if-Loading loadPost-title + body + button delete
// 'https://jsonplaceholder.typicode.com/posts/'

class FullPost extends Component {
    state = {
        loadedPost: null,
    }

    componentDidUpdate () {
        axios.get( 'https://jsonplaceholder.typicode.com/posts/' + this.props.id )
            .then( response => {
                this.setState({ loadedPost: response.data })
            } )
    }

    render () {
        let post = <p style={{textAlign: "center"}}>Select a post please</p>

        if ( this.props.id) {
            post = (
                <p style={{textAlign: "center"}}>Loading</p>
            );
        }

        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>
            )
        }
        return post;
    }
}

export default FullPost;