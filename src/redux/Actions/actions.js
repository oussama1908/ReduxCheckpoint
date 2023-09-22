import {
    ADD_POST,
    REMOVE_POST,
    UPDATE_POST_TITLE,
    TOGGLE_TASK_STATUS,
    FILTER_TASKS,
  } from './actions-types';
  
  // Action Creators
  
  // This action creator creates an action to add a new post (or task) to the Redux store.
  export const addPost = (newPost) => ({
    type: ADD_POST,
    payload: newPost, // The new task to be added
  });
  
  // This action creator creates an action to remove a post (or task) from the Redux store.
  export const removePost = (postId) => ({
    type: REMOVE_POST,
    payload: postId, // The ID of the task to be removed
  });
  
  // This action creator creates an action to update the title of a post (or task) in the Redux store.
  export const updatePostTitle = (postId, newTitle) => ({
    type: UPDATE_POST_TITLE,
    payload: { postId, newTitle }, // The ID of the task and its new title
  });
  
  // This action creator creates an action to toggle the status (done/undone) of a post (or task) in the Redux store.
  export const toggleTaskStatus = (postId) => ({
    type: TOGGLE_TASK_STATUS,
    payload: postId, // The ID of the task whose status is to be toggled
  });
  
  // This action creator creates an action to filter tasks based on their status (e.g., all, done, undone).
  export const filterTasks = (filterDone) => ({
    type: FILTER_TASKS,
    payload: filterDone, // The filter value (e.g., 'all', 'done', 'undone')
  });
  
  // This action creator creates an action to set the filter value for tasks (reusing the same type as FILTER_TASKS).
  export const setFilterDone = (filterDone) => ({
    type: FILTER_TASKS,
    payload: filterDone, // The filter value to be set
  });
  