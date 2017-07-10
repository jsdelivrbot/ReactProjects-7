import React,{Component,PropTypes} from 'react';
import {connect } from 'react-redux';
import {fetchPost,deletePost} from '../actions/index';
import {Link} from 'react-router';
class PostsShow extends  Component{
    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }
    static contextTypes={
        router:PropTypes.object
    };
    onDeleteClick(){
        this.props.deletePost(this.props.params.id).then(()=>{
            this.context.router.push("/");
        });

    }
    render(){
        console.log(this.props.post);
        const {post}=this.props;
        if(!post){
            return <div>Loading .... </div>
        }

        //console.log(this.props);
        return(

            <div>
                <Link to="/">Back to Index</Link>
                <button className="btn  btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories :{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}
function mapStateToProps(state){
    console.log(state.posts);
    return {post:state.posts.post};
}
export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);