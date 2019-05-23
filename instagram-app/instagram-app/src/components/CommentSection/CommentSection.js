import React from 'react';
import './CommentSection.css';

function CommentSection(props) {
  return (
    <div>
      {props.comments.map(comment => (
        <div className="comment">
          <p className="comment-username">{comment.username}</p>
          <p className="comment-text">{comment.text}</p>
        </div>
        ))
      }
      <input></input>
    </div>
  )
}

export default CommentSection;
