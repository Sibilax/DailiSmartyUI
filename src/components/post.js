import React, { Component } from 'react';


class Post extends Component {
    render() {
        return (
            <li key={index}>  
                {this.props.title} 
            </li>
        );
    }
}

export default Post;
