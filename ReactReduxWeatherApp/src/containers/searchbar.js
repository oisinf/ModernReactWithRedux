import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'
import _ from 'lodash';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
                    term: '', 
                    };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        
        //Need to now make API request
        this.props.fetchWeather(this.state.term);

        this.setState({term: ''})
    }

    render(){
        
        var textClass = 'input-group';
        var placeHolder = 'Enter a city for a 5 day forcast';
         if(this.props.invalidInput){
            textClass = 'input-group has-danger';
            placeHolder = 'Please enter a valid city';
         }

        return(
        <form onSubmit={this.onFormSubmit}
            className={textClass}>
        <input
            placeholder={placeHolder}
            className='form-control'
            value={this.state.term}
            onChange={this.onInputChange}/>

            <span className='input-group-btn'>
                <button type='submit' className='btn btn-secondary'>Submit</button>
            </span>
        </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}
function mapStateToProps(state){
    if(state.weather.invalidInput){
    return {invalidInput: state.weather.invalidInput};
    }
    return {invalidInput: false}; 
}
//Passing null for the first argument, doesn't care about state i.e. first arg is state, 
//this container doesn't care about state
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);