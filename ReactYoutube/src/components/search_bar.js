import React, {Component} from 'react';

class SearchBar extends Component {
    
    constructor (props){
        super(props);

        this.state = { term: '' };
    }
    
    render () {
        return (
            <div className="input-group">
                <input
                    className="form-control form-group"
                    placeholder="Please input video name"
                    value = {this.state.term} 
                    onChange={event => this.onInputChange(event.target.value)} /> 
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
