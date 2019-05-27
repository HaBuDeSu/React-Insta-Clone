import React from 'react';
import './PostContainer.css';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: props.post.likes
    }
  }

  addLike = e => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render () {
    return (
      <div className="post-container">
        <div className="post-header">
          <img src={this.props.post.thumbnailUrl} alt={this.props.post.username}></img>
          {this.props.post.username}
        </div>
        <div className="post-image">
          <img src={this.props.post.imageUrl} alt={this.props.post.username}></img>
        </div>
        <div className="icon-row">
          <div className="icons-left">
            <img
              src="https://img.icons8.com/material-outlined/24/000000/like.png"
              className="like-button"
              onClick={this.addLike}></img>
            <img src="https://img.icons8.com/ios/24/000000/comments.png" className="comment-button"></img>
            <img src="https://img.icons8.com/material-outlined/24/000000/share-rounded.png" className="share-button"></img>
          </div>
          <div className="icons-right">
            <img src="https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon.png" className="bookmark-button"></img>
          </div>
        </div>
        <p className="likes">{this.state.likes} likes</p>
        <div className="comment-section">
          {this.props.commentsection}
        </div>
      </div>
    )
  }
}

export default PostContainer;
