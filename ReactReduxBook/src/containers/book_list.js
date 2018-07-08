import React, {Component} from 'react'; 
import { connect }from 'react-redux';
import {selectBook} from  '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                onClick={() => this.props.selectBook(book)}
                key={book.title} 
                className="list-group-item">
                {book.title}
                </li>
            );
        });
    }
    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//Function glue between react and redux 
function mapStateToProps(state){
    //whatever gets returned from here will show up as 
    //props inside BookList
    return {
        //state is from BookList
        books: state.books
    };
}

//Anything return by this function will end up as props on the bookList container
function mapDispatchToProps(dispatch){
    //Whenever select book is called, the result should be passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

//Promote bookList from a component to a container - it needs 
//to know  about this new dispatch method, selectBook. Make it available 
//as a prop. 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);