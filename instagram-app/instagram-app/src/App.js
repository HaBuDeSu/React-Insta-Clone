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
        <div className="app-header">
          <div className="header-logo">
            <h1>Instaclone</h1>
          </div>
          <SearchBar />
          <div className="header-icons">
          </div>
        </div>
        {this.state.data.map(post => (
          <PostContainer
            post = {post}
            commentsection = <CommentSection
                comments = {post.comments}
              />
          />
        ))}
      </div>
    );
  }
}

export default App;
