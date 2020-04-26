import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST } from "../types";
import { DATA } from "../../data";

export const loadPosts = () => {
    return {
        type: LOAD_POSTS,
        payload: DATA
    }
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