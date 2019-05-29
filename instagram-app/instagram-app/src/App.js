import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

const App = () => {
  return (
    <ComponentFromWithAuthenticate />
  );
}

export default App;
