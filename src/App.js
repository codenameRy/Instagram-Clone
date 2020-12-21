import React from 'react';
import "./App.css";
import InstagramHeader  from './images/instagram_header.png';
import Post from './Post/Post';

function App() {
  return (
    <div className="app">

      {/* IG Header */}
      <div className="app__header">
      <img 
      className="app__headerImage"
      src = {InstagramHeader}
      alt="instagram"
      />
      </div>

      <h1>Hello you clever programmers! Lets build an Instagram Clone with ReactJS 🚀 </h1>
      
      <Post />
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
