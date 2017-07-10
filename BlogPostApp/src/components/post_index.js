import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostIndex extends  Component{
    componentWillMount(){
        this.props.fetchPosts();
    }
    constructor(props){
        super(props);
        this.renderPosts=this.renderPosts.bind(this);
    }
    renderPosts(){
        //console.log(this.props.posts);
        let postsToRender=[];
        for(let post of this.props.posts){
            let pos=
                <li className="list-group-item" key={post.id}>
                <Link to={"posts/"+post.id}>
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                </Link>
            </li>
            postsToRender.push(pos);
        }
        console.log(postsToRender);
        /*this.props.posts.map((post)=>{
            return (
                <li className="list-group-item" key={post.id}>
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                </li>
            );
        });*/
        return postsToRender;
    }
    render(){
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
             <h3>Posts</h3>
             <ul className="list-group">
                 {this.renderPosts()}
             </ul>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {posts:state.posts.all};
}
export default connect(mapStateToProps,{fetchPosts})(PostIndex);