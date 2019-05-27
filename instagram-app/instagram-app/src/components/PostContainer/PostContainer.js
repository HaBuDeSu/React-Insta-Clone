import React from 'react';
import './PostContainer.css';

function PostContainer(props) {
  return (
    <div className="post-container">
      <div className="post-header">
        <img src={props.post.thumbnailUrl} alt={props.post.username}></img>
        {props.post.username}
      </div>
      <div className="post-image">
        <img src={props.post.imageUrl} alt={props.post.username}></img>
      </div>
      <div className="icon-row">
        <div className="icons-left">
          <img src="https://img.icons8.com/material-outlined/24/000000/like.png" className="like-button"></img>
          <img src="https://img.icons8.com/ios/24/000000/comments.png" className="comment-button"></img>
          <img src="https://img.icons8.com/material-outlined/24/000000/share-rounded.png" className="share-button"></img>
        </div>
        <div className="icons-right">
          <img src="https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon.png" className="bookmark-button"></img>
        </div>
      </div>
      <p className="likes">{props.post.likes} likes</p>
      <div className="comment-section">
        {props.commentsection}
      </div>
    </div>
  )
}

export default PostContainer;
