import { FETCH_WEATHER, FETCH_ERROR} from "../actions/index";

export default function(state = [], action){
    //console.log('Action recieved', action);
    switch (action.type){
        case FETCH_WEATHER :
        //Never manipulate state, return new state instead 
        //console.log("Action", action.error);
        //console.log("Payload", action.payload.;
            return [action.payload.data, ...state];

        case FETCH_ERROR : 
            return [...state ];
    }
    return state; 
}