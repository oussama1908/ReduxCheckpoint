import { ADD_POST, REMOVE_POST, UPDATE_POST_TITLE, TOGGLE_TASK_STATUS, FILTER_TASKS } from '../Actions/actions-types';

const initialState = {
  posts: [
    {
      id: 1,
      title: 'my first post',
      isDone: false, // Add the isDone property
    },
  ],
  filterDone: 'all', // Initialize the filterDone state
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      // Handle ADD_POST action
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case REMOVE_POST:
      // Handle REMOVE_POST action
      const updatedPosts = state.posts.filter((post) => post.id !== action.payload);
      return {
        ...state,
        posts: updatedPosts,
      };
    case UPDATE_POST_TITLE:
      // Handle UPDATE_POST_TITLE action
      // Update the title in your state
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.postId
            ? { ...post, title: action.payload.newTitle }
            : post
        ),
      };
    case TOGGLE_TASK_STATUS:
      // Handle TOGGLE_TASK_STATUS action
      // Toggle the isDone property of the selected task
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, isDone: !post.isDone }
            : post
        ),
      };
    case FILTER_TASKS:
      // Handle FILTER_TASKS action
      return {
        ...state,
        filterDone: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
