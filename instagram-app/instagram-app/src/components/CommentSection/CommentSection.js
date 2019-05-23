import React from 'react';
import './CommentSection.css';

function CommentSection(props) {
  return (
    <div>
      {props.username}
      {props.text}
    </div>
  )
}

export default CommentSection;
