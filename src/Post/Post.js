//Component to design the post visual
import React from "react";
import './Post.css';
import ReactImage from "../images/react-image-1.jpg";
import RyImage from '../images/RPic2.jpg'
import Avatar from '@material-ui/core/Avatar'

function Post() {
  return (
    <div className="post">
      <div className="post__header">
      <Avatar 
      className="post__avatar" 
      alt="RLee" 
      src={RyImage} 
      />
      <h3>Username</h3>
      </div>
      {/* Header -> Avatar + Username */}

      <img className="post__image" src={ReactImage} alt="react" />
      {/* Image */}

      <h4 className="post__text"><strong>theMagicDon</strong> WOW day 8 of live session</h4>
      {/* Username + Caption */}
    </div>
  );
}

export default Post;
