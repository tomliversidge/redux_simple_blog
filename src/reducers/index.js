import { combineReducers } from 'redux';
import PostsReducer from './reducers_posts';
import {reducer as formReducer} from 'redux-form';
const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer //form is magic key for redux-form
});

export default rootReducer;
