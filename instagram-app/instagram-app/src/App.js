import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)
const LoginPage = withAuthenticate(Login)

const App = () => {
  return (
    <ComponentFromWithAuthenticate />,
    <LoginPage />
  );
}

console.log(localStorage)


export default App;
