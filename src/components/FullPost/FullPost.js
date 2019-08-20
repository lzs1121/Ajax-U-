import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

// state, loadedPost;
// cdu, condition: props id, not loadedpost or is LP but not props id, axios-get(url) and then(cb, setState)
// show content, if=> if-Loading loadPost-title + body + button delete
// 'https://jsonplaceholder.typicode.com/posts/'

class FullPost extends Component {
    state = {
        loadedPost: null,
    }

    componentDidUpdate () {
        if ( this.props.id ) {
            if ( !this.state.loadedPost || ( this.state.loadedPost && this.state.loadedPost.id !== this.props.id ) ) {
                axios.get( 'https://jsonplaceholder.typicode.com/posts/' + this.props.id )
                    .then( response => {
                        this.setState({ loadedPost: response.data })
                    } );
            }
        }
    }

    deleteDataHandler = () => {
        axios.delete( 'https://jsonplaceholder.typicode.com/posts/' + this.props.id )
            .then(response => {
                console.log(response)
            });
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
                    <button className="Delete" onClick={this.deleteDataHandler}>Delete</button>
                </div>
            </div>
            )
        }
        return post;
    }
}

export default FullPost;