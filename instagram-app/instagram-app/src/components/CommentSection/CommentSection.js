import React from 'react';
import './CommentSection.css';

function CommentSection(props) {
  return (
    <div>
      {props.comments.map(comment => (
        <div>
          <p>{comment.username}</p>
          <p>{comment.text}</p>
        </div>
        ))
      }
      <input></input>
    </div>
  )
}

export default CommentSection;
