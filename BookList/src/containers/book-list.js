import React, {Component} from 'react';
import { connect } from 'react-redux'
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  
  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
          className='list-group-item' 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}>{book.title}</li>
      )
    });
  }
  
  render() {
    return(
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
  
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList container
// ie this.props.selectBook
function mapDispatchToProps(dispatch) {
  // whever select book is called, pass the result to all the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// promote BookList from a component to a container. It needs to know about this new 
// dispatch method, selectBook. It's now a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);