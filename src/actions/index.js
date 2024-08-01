import {SET_RECENT_POSTS} from './types';
import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get('https://api.dailysmarty.com/posts')//axios.get('https://api.thedogapi.com/v1/breeds')
            .then(response => {
                console.log(response.data.posts);// solicitud para dailysmarty: console.log(response.data.posts);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data //para dailysmarty  payload: response.data.posts
                })
            })
            .catch(error => {
                console.error('Error fetching recent posts:', error); // Manejo de errores
            });
    }
}