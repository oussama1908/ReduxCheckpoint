import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../redux/Actions/actions";
import "./style/CreatePost.css";

// Define mapDispatchToProps to map the addArticle prop
const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (post) => dispatch(addPost(post)),
  };
};

const CreatePost = (props) => {
  // Define local state to manage the input field
  const [title, setTitle] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (!title) {
      alert("Title field cannot be empty."); // Display an alert if the title is empty
      return; // Exit the function if the title is empty
    }
    // Dispatch the addPost action with a new task object
    props.addArticle({
      id: Date.now(), // Generate a unique ID based on the current timestamp
      title, // Get the task title from the local state
      isDone: false, // Set isDone to false by default
    });
    setTitle(""); // Clear the input field by resetting the local state
  };

  // Render the CreatePost component
  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      <div className="input-container">
        <div className="pass">
          <span class="material-symbols-outlined"> check_circle </span>
          <h1 htmlFor="Title">My To Do List</h1>
        </div>
        <div className="input-field-container">
          <input
            className="inputstyle"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update the local state with the input value
            placeholder="Enter a task..."
          />
          <button type="submit" className="btn_add" style={{ height: "40px" }}>
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

// Connect the CreatePost component to the Redux store, mapping only mapDispatchToProps
export default connect(null, mapDispatchToProps)(CreatePost);
