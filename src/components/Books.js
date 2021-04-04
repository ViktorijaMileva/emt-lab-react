import '../style/Books.css';
import BookService from '../repository/BookRepository.js';
import React from 'react';
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';

class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 5
        }

    }
    handleClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    render(){

        const books = this.props.books;
        const offset = this.state.size * this.state.page; //0, 5
        const nextPageOffset = offset + this.state.size; //5, 10
        const pageCount = Math.ceil(this.props.books.length / this.state.size); //2

        return(
        
            <div className= "table-div">
            <table className="tableAnimals">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Author</th>
              <th>Available Copies</th>
              <th></th>
              <th></th>
            </tr>
            
            {books.map(book => <tr>
                <td>{book.name}</td>
                <td>{book.category}</td>
                <td>{book.author.name}</td>
                <td>{book.availableCopies}</td>
                <td>
                    <Link className="editLink" onClick={() => this.props.onEditBook(book.id)}
                      to={`/books/edit/${book.id}`} >Edit Book</Link>
                </td>
                <td>
                    <Link className="deleteLink" onClick={() => this.props.onDeleteBook(book.id)}>Delete</Link>
                </td>
            </tr>).filter((book, index) => {
                    return index >= offset && index < nextPageOffset;
        })

            }


            <Link className="addBookLink" to="/books/add">Add Book</Link>

            <ReactPaginate previousLabel={"back"}
            nextLabel={"next"}
            breakLabel={<a href="#">...</a>}
            breakClassName={"break-me"}
            pageClassName={"ml-1"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handleClick}
            containerClassName={"pagination"}
            activeClassName={"active"} />

            
              
        
            
          </table>
          
          </div>
        

        )
    }

    }    

export default Books;