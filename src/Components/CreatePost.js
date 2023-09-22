import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../redux/Actions/actions";
import "./style/CreatePost.css";
const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (post) => dispatch(addPost(post)),
  };
};

const CreatePost = (props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title field cannot be empty.");
      return;
    }
    props.addArticle({
      id: Date.now(),
      title,
      isDone: false, // Set isDone to false by default
    });
    setTitle(""); // Clear the input field
  };

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
          onChange={(e) => setTitle(e.target.value)}
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

export default connect(null, mapDispatchToProps)(CreatePost);
