import logo from './logo.svg';
import './App.css';
import Books from './components/Books.js';
import {Route, BrowserRouter as Router} from 'react-router-dom'; 
import AddBook from './components/AddBook.js';
import EditBook from './components/EditBook.js';
import BookService from './repository/BookRepository.js';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  }

  loadBooks = () => {
    BookService.fetchBooks()
    .then((data) => {
      this.setState({
        books: data.data
      })
    });
  }

  componentDidMount(){
    this.loadBooks();
  }

  addBook = (name, category, authorId, availableCopies) => {
    BookService.addBook(name, category, authorId, availableCopies)
    .then(() => {
      this.loadBooks();
    });
  }

  editBook = (id, name, category, authorId, availableCopies) => {
    BookService.editBook(id, name, category, authorId, availableCopies)
    .then(() => {
      this.loadBooks();
    });
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Route path={"/books"} exact render={() => 
            <Books books={this.state.books}/>}
            />

            <Route path={"/books/add"} exact render={() =>
            <AddBook onAddBook={this.addBook} />}
            />

            <Route path={"/books/:id"} exact render={() =>
            <EditBook onEditBook={this.editBook} />} />
        </Router>
      </div>
    );
  }
}

export default App;
