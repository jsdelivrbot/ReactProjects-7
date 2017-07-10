import React from 'react';
import {Route,IndexRoute} from 'react-router';
import PostIndex from './components/post_index';
import App from './components/app';
import PostsNew from './components/post_new';
import PostsShow from './components/posts_show';

/*
* posts/:id will match the path like :- posts/5 . It will push the value of id in PostsShow component
* in this.props.params.id [This will be done by react-router]
* */
export default(
    <Route path="/" component={App}>
     <IndexRoute components={PostIndex}/>
     <Route path="posts/new" component={PostsNew}/>
     <Route path="posts/:id" component={PostsShow}/>
    </Route>
);