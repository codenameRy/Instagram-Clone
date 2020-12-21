//Component to design the post visual
import React from "react";
import ReactImage from "../images/react-image-1.jpg";
import './Post.css';

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>
      {/* Header -> Avatar + Username */}

      <img className="post__image" src={ReactImage} alt="react" />
      {/* Image */}

      <h4 className="post__text"><strong>theMagicDon</strong> WOW day 8 of live session</h4>
      {/* Username + Caption */}
    </div>
  );
}

export default Post;
