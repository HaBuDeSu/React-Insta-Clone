import React from 'react';
import './PostContainer.css';

function PostContainer(props) {
  return (
    <div className="post-container">
      {props.username}
      <img src={props.thumbnailUrl} alt={props.username}></img>
      <img src={props.imageUrl} alt={props.username}></img>
      {props.likes}
      {props.timestamp}
      {props.comments}
    </div>
  )
}

export default PostContainer;
