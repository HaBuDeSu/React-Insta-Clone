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
      comments: [...this.state.comments, {username: "Me", text: this.state.newComment}]
    })
    console.log(this.state.comments);
  }

  render () {
    return (
      <div>
        {this.state.comments.map(comment => (
          <div className="comment">
            <p className="comment-username">{comment.username}</p>
            <p className="comment-text">{comment.text}</p>
          </div>
          ))
        }
        <form className="comment-input" onSubmit={this.addNewComment}>
          <input
            type="text"
            value={this.state.newComment}
            onChange={this.handleChanges}></input>
        </form>
      </div>
    )
  }
}

export default CommentSection;
