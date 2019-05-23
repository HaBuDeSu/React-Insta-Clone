import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Instaclone</h1>
        <SearchBar />
        {this.state.data.map(post => (
          <PostContainer
            username = {post.username}
            thumbnailUrl = {post.thumbnailUrl}
            imageUrl = {post.imageUrl}
            likes = {post.likes}
            timestamp = {post.timestamp}
            comments = {post.comments.map(comment => (
              <CommentSection
                username = {comment.username}
                text = {comment.text}
              />
            ))}
          />
        ))}
      </div>
    );
  }
}

export default App;
