import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount(){
    // only called once
    this.props.fetchPosts();
  }

    renderPosts(){
        return this.props.posts.map((post) =>{
           return (
               <li className="list-group-item" key={post.id}>
                   <span className="pull-xs-right">
                       {post.categories}
                   </span>
                   <strong>
                       <Link to={"posts/"+post.id}>
                       {post.title}</Link></strong>
               </li>
           )
        });
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
<h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        </div>
    );
  }
}
function mapStateToProps(state){
    return {posts: state.posts.all};
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);