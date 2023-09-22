import React from 'react';
import './App.css';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


function App() {
  return (
    <div className="App">
      <CreatePost />
      <PostList />
    </div>
  );
}

export default App;
