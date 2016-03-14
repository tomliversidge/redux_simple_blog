import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount(){
    // only called once
    this.props.fetchPosts();
  }

  render() {
    return (
        <div></div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);