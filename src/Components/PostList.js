import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removePost, updatePostTitle, setFilterDone, toggleTaskStatus } from '../redux/Actions/actions';
import './style/PostList.css'
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    filterDone: state.filterDone,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removePost: (postId) => dispatch(removePost(postId)),
    updateTitle: (postId, newTitle) => dispatch(updatePostTitle(postId, newTitle)),
    setFilter: (filterValue) => dispatch(setFilterDone(filterValue)),
    toggleStatus: (postId) => dispatch(toggleTaskStatus(postId)),
  };
};

const PostList = (props) => {
  const [editedTitle, setEditedTitle] = useState({});
  const [isEditing, setIsEditing] = useState({});

  const handleRemove = (postId) => {
    props.removePost(postId);
  };

  const handleEdit = (postId) => {
    setEditedTitle({
      ...editedTitle,
      [postId]: props.posts.find((post) => post.id === postId).title,
    });
    setIsEditing({ ...isEditing, [postId]: true });
  };

  const handleSave = (postId) => {
    props.updateTitle(postId, editedTitle[postId]);
    setEditedTitle({
      ...editedTitle,
      [postId]: undefined,
    });
    setIsEditing({ ...isEditing, [postId]: false });
  };

  const handleCancel = (postId) => {
    setEditedTitle({
      ...editedTitle,
      [postId]: undefined,
    });
    setIsEditing({ ...isEditing, [postId]: false });
  };

  const handleFilterChange = (filterValue) => {
    props.setFilter(filterValue);
  };

  const filterTasks = (task) => {
    if (props.filterDone === 'all') {
      return true;
    } else if (props.filterDone === 'done') {
      return task.isDone;
    } else {
      return !task.isDone;
    }
  };

  const handleToggleStatus = (postId) => {
    props.toggleStatus(postId);
  };

  return (
    <div className="PostListStyle">
      <div className="filter-buttons">
        <button className="btn_add" onClick={() => handleFilterChange('all')}>All</button>
        <button className="btn_add" onClick={() => handleFilterChange('done')}>Done</button>
        <button className="btn_add" onClick={() => handleFilterChange('undone')}>Undone</button>
      </div>
      {props.posts.length > 0 && (
        <div className="post-list">
          {props.posts.filter(filterTasks).map((post) => (
            <div className="Poster" key={post.id}>
              <div id={post.id} className="post-itemone">
                {isEditing[post.id] ? (
                  <div className="Poster">
                    <input
                      type="text"
                      value={editedTitle[post.id] || ''}
                      onChange={(e) =>
                        setEditedTitle({
                          ...editedTitle,
                          [post.id]: e.target.value,
                        })
                      }
                    />
                    <button
                      type="button"
                      className="btn_add"
                      onClick={() => handleSave(post.id)}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn_cancel"
                      onClick={() => handleCancel(post.id)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="post-item">
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        checked={post.isDone}
                        onChange={() => handleToggleStatus(post.id)}
                      />
                    </div>
                    <h1>{post.title}</h1>
                    <div className="ListButton">
                      <button
                        type="button"
                        className="btn_add"
                        onClick={() => handleEdit(post.id)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn_remove"
                        onClick={() => handleRemove(post.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
