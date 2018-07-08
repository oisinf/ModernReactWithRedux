import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action){
    console.log('Action recieved', action);
    switch (action.type){
        case FETCH_WEATHER :
        //Never manipulate state, return new state instead 
        return [action.payload.data, ...state];
    }
    return state; 
}