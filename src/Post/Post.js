//Component to design the post visual
import React from "react";
import './Post.css';
import RyImage from '../images/RPic2.jpg'
import Avatar from '@material-ui/core/Avatar'

function Post({username, caption, imageURL}) {
  return (
    <div className="post">
      <div className="post__header">
      <Avatar 
      className="post__avatar" 
      alt="RLee" 
      src={RyImage} 
      />
      <h3>{username}</h3>
      </div>
      {/* Header -> Avatar + Usernames */}

      <img className="post__image" src={imageURL} alt="react" />
      {/* Image */}

      <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
      {/* Username + Caption */}
    </div>
  );
}

export default Post;
