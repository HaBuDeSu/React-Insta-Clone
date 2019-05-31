import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate';
import Login from './components/Login/Login';

const Posts = withAuthenticate(PostsPage)
const LoginPage = withAuthenticate(Login)

const App = () => {
  if(localStorage.getItem("username") == "null") {
    return <LoginPage />
  } else {
    return <Posts />
  }
}

console.log(localStorage)

export default App;
