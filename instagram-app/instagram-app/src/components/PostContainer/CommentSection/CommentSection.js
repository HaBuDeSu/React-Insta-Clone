import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super();

    this.state = {
        comments: props.comments,
        newComment: ""
    }
  }

  handleChanges = e => {
    this.setState({
      newComment: e.target.value
    });
  }

  addNewComment = e => {
    e.preventDefault();
    this.setState({
      comments: [...this.state.comments, {username: "Me", text: this.state.newComment}],
      newComment: ""
    });
  }

  render () {
    return (
      <div>
        {this.state.comments.map(comment => (
          <div className="comment" key={comment.text}>
            <p className="comment-username">{comment.username}</p>
            <p className="comment-text">{comment.text}</p>
          </div>
          ))
        }
        <form onSubmit={this.addNewComment}>
          <input
            className="comment-input"
            placeholder="Add a comment..."
            type="text"
            value={this.state.newComment}
            onChange={this.handleChanges}>
          </input>
          <button className={this.state.newComment === "" ? "post-button-light" : "post-button"}>Post</button>
        </form>
      </div>
    )
  }
}

export default CommentSection;
