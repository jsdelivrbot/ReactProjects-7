import React,{Component,PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index'
import {Link}from 'react-router';

class PostsNew extends  Component{
    //router property from react has been pulled from parent component to this child component
    //and is pushed to context property hence we can access it in this component
    static contextTypes={
        router:PropTypes.object
    };
    onSubmit(props){
        //Create Post Returns a promise object and then is call back on promise object
        this.props.createPost(props).then(
            ()=>{
                //Blog Post Has been Created navigate User to index
                //Navgiating by calling this.context.router.push with new Path to navigate to
                this.context.router.push("/");
            }

        );
    }
    render(){
        const {fields:{title,categories,content},handleSubmit}=this.props;
        //console.log(title);
        //const {handleSubmit} =this.props.handleSubmit
        // we get title.touch if we touch the text box
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3> Create a new Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger':''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="textHelp">
                        {title.touched?title.error:""}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ?'has-danger':''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="textHelp">
                        {categories.touched?categories.error:""}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ?'has-danger':''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    <div className="textHelp">
                        {content.touched?content.error:""}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}
//Validation Failure will stop any submitting of form
function validate(value){
    const error={

    };
    if(!value.title){
        error.title='Enter a UserName !';
    }
    if(!value.categories){
        error.categories='Enter a Category !!';
    }
    if(!value.content){
        error.content='Enter some content !!';
    }
    return error;
}
// Redux form adds the value entered in form in title , categories , content on application state
//Redux form pulls state from component level to application level
//Redux form act as a connect it have configuration object extra to connect
//connect :- 1st mapStateToProps, 2nd mapDispatchToProps
//reduxForm :- 1st configObject, 2nd mapStateToProps  , 3rd mapDispatchToProps
export default  reduxForm({
    form:'PostNewForm',
    fields:['title','categories','content'],
    validate
},null,{createPost})(PostsNew);