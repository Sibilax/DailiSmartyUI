import {SET_RECENT_POSTS} from './types';
import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get('https://api.dailysmarty.com/posts')
            .then(response => {
                console.log(response.data.posts);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.posts 
                })
            })
            .catch(error => {
                console.error('Error fetching recent posts:', error); // Manejo de errores
            });
    }
}

export function fetchPostsWithQuery() {
    return function(dispatch) {
        axios.get(`https://dailysmarty.com/watch?q=${query}`)
            .then(response => {
                console.log(response.data.posts);
                //dispatch({
                    //type: SET_RECENT_POSTS,
                    //payload: response.data.posts 
                //}) 
            })
            .catch(error => {
                console.error('Error fetching recent posts:', error); // Manejo de errores
            });
    }
}