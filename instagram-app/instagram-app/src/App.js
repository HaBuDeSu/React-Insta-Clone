import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
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
            index = {this.state.data.indexOf(post)}
            commentsection = <CommentSection
                comments = {post.comments}
                index = {this.state.data.indexOf(post)}
              />
          />
        ))}
      </div>
    );
  }
}

export default App;
