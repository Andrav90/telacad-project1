import React from 'react';
import { connect } from 'react-redux';
import PostItem from '../postItem/PostItem';

class PostList extends React.Component {
    constructor(){
        super();
        this.state ={
            posts: []
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {   
            data = data.filter(post => post.id < 4);
            data.forEach(post => {
            post.isGoldClient = false;
            });
            this.setState({posts: data});
        })
    }

    render(){
        const posts = this.state.posts;
        return (
            <div>
                <h2 style={{paddingTop: '40px'}}>Posts list:</h2>
                { posts.map((post, index) => {
                    return <PostItem
                        title={ post.title }
                        body={ post.body }
                        key={ index }
                    />
                })}
            </div>
        );
    };
};

export default PostList;