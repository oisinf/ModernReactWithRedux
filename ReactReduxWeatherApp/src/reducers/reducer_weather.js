import { FETCH_WEATHER, FETCH_ERROR} from "../actions/index";

export default function(state , action){
    //console.log('Action recieved', action);
    switch (action.type){
        case FETCH_WEATHER :
            return {weatherData: [action.payload.data, ...state.weatherData], invalidInput : false};

        case FETCH_ERROR : 
            return { weatherData: [...state.weatherData],  invalidInput : true};
    }
    return {weatherData : [], invalidInput: false}; 
}