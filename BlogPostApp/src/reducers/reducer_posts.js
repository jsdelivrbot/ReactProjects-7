const INITIAL_STATE=  {all:[],post:null};
import {FETCH_POSTS,FETCH_POST} from '../actions/index';
export  default function(state=INITIAL_STATE,action){
    switch (action.type){
        case FETCH_POST:
     //       console.log(action.payload.data);
            return {...state,post:action.payload.data};
        case FETCH_POSTS:
            //split current state array , and add new data from action's payload on all keyword and return a new object
            return {...state,all:action.payload.data};
        default:
            return INITIAL_STATE;
    }
}