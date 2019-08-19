import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

// state;
// cDM gets the datawith axios, get url, then response, map the posts, setState;
// postSelectHandler set the id to the selectedPostId;
// pass key, title, author

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
    };

    componentDidMount () {
        axios.get( 'https://jsonplaceholder.typicode.com/posts' )
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Sean'
                }
            });
            this.setState({posts: updatedPosts});
        })
    }

    postSelectedHandler = id => {
        this.setState({selectedPostId: id});
    }


    render () {
        const posts = this.state.posts.map(post => {
            return <Post 
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}
            />
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;