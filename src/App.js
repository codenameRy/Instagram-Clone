import React, { useState, useEffect} from 'react';
import "./App.css";
import InstagramHeader  from './images/instagram_header.png';
import Post from './Post/Post';

import { db } from './Firebase/firebase'

function App() {
  const [posts, setPosts] = useState([
    // {
    // username: "testing",
    // caption: "Wow it works part 6" ,
    // imageURL: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    // }
  ]);

  //useEffect - Runs a piece of code based on specific conditions

  useEffect (() => {
    //this is where the code runs ...
    db.collection('posts').onSnapshot(snapshot => {
    //every time a new post is added, this code fires...
    setPosts(snapshot.docs.map(doc => ({
      id: doc.id, 
      post: doc.data()
    })));
    })
  }, []);
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

      <h1>Hello there clever programmers! Lets build an Instagram Clone with ReactJS and Firebase for Life 🚀 </h1>

      {
        posts.map(({id, post}) => (
          //The addition of key id from post will allow the app to only render the new unique post on all the react apps
          <Post key={id} username={post.username} caption={post.caption} imageURL={post.imageURL}/>
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
