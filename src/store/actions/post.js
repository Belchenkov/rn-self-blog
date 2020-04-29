import {
    LOAD_POSTS,
    TOGGLE_BOOKED,
    REMOVE_POST,
    ADD_POST
} from "../types";
import { DB } from "../../db";

export const loadPosts = () => {
    return async dispatch => {
        const posts = await DB.getPosts();

        dispatch({
            type: LOAD_POSTS,
            payload: posts
        });
    };
};

export const toggleBooked = id =>{
    return {
        type: TOGGLE_BOOKED,
        payload: id
    }
};

export const removePost = id => {
    return {
        type: REMOVE_POST,
        payload: id
    }
};

export const addPost = post => {
    post.id = Date.now().toString();

    return {
        type: ADD_POST,
        payload: post
    }
};
