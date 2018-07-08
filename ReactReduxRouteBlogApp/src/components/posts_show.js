import React , { Component} from 'react'; 
import {connect} from 'react-redux'; 
import {fetchPost, deletePost} from '../actions'
import {Link} from 'react-router-dom';

class PostsShow extends Component{
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick(){
        const{id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/")
        });
    }

    render(){
        const { post }  = this.props;
        //if no posst
        if (!post){
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                Delete Post 
                </button>
                <h3>{post.title}</h3>
                <h5>Categories: {post.categories}</h5>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps){
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost , deletePost})(PostsShow); 