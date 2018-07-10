import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component{
    renderField(field){
        const {meta: {touched, error} } = field; 
        const className = `form-group ${touched && error ? 'has-danger': ''}`;
        var InputType = 'input';
        var rows = '1';
        if(field.input.name=="content"){
            InputType = 'textarea';
            rows = '6';
        }
        return (
        <div className={className}>
            <label>{field.label}</label>
            <InputType rows={rows} id={field.input.name} className="form-control"
                type="text"
                {...field.input}
            />
            <div className="text-help">
            {touched ? error: ''}
            </div>
        </div>
        );
    }
    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }
    render()
    {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                label="Title"
                name="title"
                component={this.renderField}
                />
                <Field
                label="Categories"
                name="categories"
                component={this.renderField}
                />
                <Field
                label="Post Content"
                name="content"
                component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link id="cancel" to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    };
}

function validate(values){
    const errors = {};
    //validate inputs
    if (!values.title){
        errors.title = "Enter a title";
    }
    if (!values.categories){
        errors.categories = "Enter categories";
    }
    if (!values.content){
        errors.content = "Enter some content";
    }
    //If errors is empty the form is fine to submit
    //if errors has *any* properties , redux assumes form is invalid
    return errors; 
}
export default reduxForm({
    validate, //same as validate: validate
    form: 'PostsNewForm'
})(
   connect(null, {createPost})(PostsNew)
); 