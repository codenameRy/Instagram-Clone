import React, {useState} from 'react';
import "./App.css";
import InstagramHeader  from './images/instagram_header.png';
import Post from './Post/Post';

function App() {
  const [posts, setPost] = useState([
    {
    username: "theMagicDon",
    caption: "Wow it works" ,
    imageURL: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    },
    {
    username: "theMagicDon",
    caption: "Wow it works" ,
    imageURL: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    }
  ]);
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

      <h1>Hello there clever programmers! Lets build an Instagram Clone with ReactJS and Firebase 🚀 </h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageURL={post.imageURL}/>
        ))
      }
      
      {/* <Post username="theMagicDon" caption="Wow it works" imageURL="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"/>
      <Post username="peace" caption="tranquil vibes" imageURL="https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/461803-angular-JavaScript-HTML-1.jpg"/>
      <Post username="fortunetella" caption="Future" /> */}
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
