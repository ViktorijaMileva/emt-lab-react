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
      books: [],
      selectedBook: {}
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

  getBook = (id) => {
    BookService.getBook(id)
    .then((data) => {
        this.setState({
          selectedBook: data.data
        })
      })
  }

  editBook = (id, name, category, authorId, availableCopies) => {
    BookService.editBook(id, name, category, authorId, availableCopies)
    .then(() => {
      this.loadBooks();
    });
  }

  deleteBook = (id) => {
    BookService.deleteBook(id)
    .then(() => {
      this.loadBooks();
    });
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Route path={"/books"} exact render={() => 
            <Books books={this.state.books} 
            onEditBook={this.getBook} 
            onDeleteBook={this.deleteBook}
            />}
            />

            <Route path={"/books/add"} exact render={() =>
            <AddBook onAddBook={this.addBook} />}
            />

            <Route path={"/books/edit/:id"} exact render={() =>
            <EditBook onEditBook={this.editBook} book={this.state.selectedBook} />} />
        </Router>
      </div>
    );
  }
}

export default App;
