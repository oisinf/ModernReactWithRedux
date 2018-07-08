import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};

        //bind context to onInputChange
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        //console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        
        //Need to now make API request
        this.props.fetchWeather(this.state.term);
        
        this.setState({term: ''});
    }

    render(){
        return(
        <form onSubmit={this.onFormSubmit}
            className='input-group'>
        <input
            placeholder='Get a 5 day forecast in your favourite cities'
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
function mapStateToProps({error}){
    return {error}; 
}
//Passing null for the first argument, doesn't care about state i.e. first arg is state, 
//this container doesn't care about state
export default connect(null, mapDispatchToProps, mapStateToProps)(SearchBar);