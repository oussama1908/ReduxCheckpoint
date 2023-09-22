import {
    ADD_POST,
    REMOVE_POST,
    UPDATE_POST_TITLE,
    TOGGLE_TASK_STATUS,
    FILTER_TASKS,
  } from './actions-types';
  export const addPost = (newPost) => ({
    type: ADD_POST,
    payload: newPost,
  });
  
  export const removePost = (postId) => ({
    type: REMOVE_POST,
    payload: postId,
  });
  
  export const updatePostTitle = (postId, newTitle) => ({
    type: UPDATE_POST_TITLE,
    payload: { postId, newTitle },
  });
  
  export const toggleTaskStatus = (postId) => ({
    type: TOGGLE_TASK_STATUS,
    payload: postId,
  });
  
  export const filterTasks = (filterDone) => ({
    type: FILTER_TASKS,
    payload: filterDone,
  });
  
  export const setFilterDone = (filterDone) => ({
    type: FILTER_TASKS,
    payload: filterDone,
  });
  
  
  
  
  
  