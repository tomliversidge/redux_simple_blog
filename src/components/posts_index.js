import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount(){
    // only called once
    this.props.fetchPosts();
  }

  render() {
    return (
        <div>
          <div className="text-xs-right">
            <Link to="posts/create" className="btn btn-primary">
              Create new post
            </Link>
          </div>
            <div>

            </div>
        </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);