import React from 'react';
import "./App.css";
import InstagramHeader  from './images/instagram_header.png';
import ReactImage from './images/react-image-1.jpg'
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
      
      <Post username = "theMagicDon" caption="Wow it works" imageURL="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"/>
      <Post />
      <Post />
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
