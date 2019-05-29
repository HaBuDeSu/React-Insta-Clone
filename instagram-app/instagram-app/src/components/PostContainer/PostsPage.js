import React from 'react';
import './PostContainer.css';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import CommentSection from '../CommentSection/CommentSection';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      searchQuery: ""
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  changeHandler = e => {
    this.setState({
      searchQuery: e.target.value
    })
  }

  search = e => {
    e.preventDefault();
    this.setState({
      data: dummyData.filter(post => post.username === this.state.searchQuery),
      searchQuery: ""
    })
  }
  
  render() {
    return(
      <div className="posts-page">
        <div className="app-header-container">
          <div className="app-header">
            <div className="header-logo">
              <h1>Instaclone</h1>
            </div>
            <SearchBar
              posts = {this.state.data}
              search = {this.state.search}
              searchQuery= {this.state.searchQuery}
              changeHandler = {this.state.changeHandler}
            />
            <div className="header-icons">
              <img src="https://img.icons8.com/ios/50/000000/compass.png" className="compass-icon"></img>
              <img src="https://img.icons8.com/ios/50/000000/alarm.png" className="notification-icon"></img>
              <img src="https://img.icons8.com/ios/50/000000/user.png" className="profile-icon"></img>
            </div>
          </div>
        </div>
        {this.state.data.map(post => (
          <PostContainer
            key = {post.id}
            post = {post}
            commentsection = <CommentSection
                comments = {post.comments}
              />
          />
        ))}
      </div>
    )
  }
}

export default PostsPage;
