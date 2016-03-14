import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class CreatePost extends Component {


    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props; // comes from the magic of redux-form

        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h1>Create Post</h1>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input {...title} type="text" className="form-control"/>
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                <label>Categories</label>
                    <input {...categories} type="text" className="form-control"/>
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                <label>Content</label>
                    <textarea {...content} className="form-control"/>
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = 'Enter a username';
    }
    if (!values.categories) {
        errors.categories = 'Enter categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content';
    }
    return errors;
}

// connect second arg is mapDispatchToProps
// reduxForm acts just like connect, but with a first arg of config
export default reduxForm({
        form: 'CreatePostForm',
        fields: ['title', 'categories', 'content'],
        validate
    },
    null, // mapStateToProps, dont have any so null
    {createPost} // mapDispatchToProps
)(CreatePost);