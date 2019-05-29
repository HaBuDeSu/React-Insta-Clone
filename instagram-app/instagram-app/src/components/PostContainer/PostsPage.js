import React from 'react';
import './PostContainer.css';
import PostContainer from './PostContainer';
import SearchBar from './SearchBar/SearchBar';
import CommentSection from './CommentSection/CommentSection';

function PostsPage (props) {
  return(
    <div className="posts-page">
      <div className="app-header-container">
        <div className="app-header">
          <div className="header-logo">
            <h1>Instaclone</h1>
          </div>
          <SearchBar
            posts = {props.data}
            search = {props.search}
            searchQuery= {props.searchQuery}
            changeHandler = {props.changeHandler}
          />
          <div className="header-icons">
            <img src="https://img.icons8.com/ios/50/000000/compass.png" className="compass-icon"></img>
            <img src="https://img.icons8.com/ios/50/000000/alarm.png" className="notification-icon"></img>
            <img src="https://img.icons8.com/ios/50/000000/user.png" className="profile-icon"></img>
          </div>
        </div>
      </div>
      {props.data.map(post => (
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

export default PostsPage;
