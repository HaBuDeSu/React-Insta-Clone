import React from 'react';
import './PostContainer.css';

function PostContainer(props) {
  return (
    <div className="post-container">
      <div className="post-header">
        <img src={props.thumbnailUrl} alt={props.username}></img>
        {props.username}
      </div>
      <img src={props.imageUrl} alt={props.username}></img>
      <p className="likes">{props.likes} likes</p>
      {props.timestamp}
      {props.commentsection}
    </div>
  )
}

export default PostContainer;
