import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate'
import dummyData from './dummy-data';

class App extends React.Component {
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
    return (
      <div className="App">
        <PostsPage
          data = {this.state.data}
          searchQuery = {this.state.searchQuery}
          changeHandler = {this.changeHandler}
          search = {this.search}
        />
      </div>
    );
  }
}

export default App;
