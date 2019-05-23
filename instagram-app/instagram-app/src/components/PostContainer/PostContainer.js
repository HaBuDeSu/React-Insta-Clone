import React from 'react';
import './PostContainer.css';

function PostContainer(props) {
  return (
    <div>
      {props.username}
      <img src={props.thumbnailUrl}></img>
    </div>
  )
}

export default PostContainer;
