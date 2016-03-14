import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROUTE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=tsevssytvety';

export function fetchPosts(){
    const request = axios.get(`${ROUTE_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}