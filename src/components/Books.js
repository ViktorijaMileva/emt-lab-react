import '../style/Books.css';
import BookService from '../repository/BookRepository.js';
import React from 'react';
import {Link} from 'react-router-dom';

class Books extends React.Component {

    constructor(props) {
        super(props);
       /* this.state = {
            books: []
        }; */
    }

/*    componentDidMount(){
        BookService.fetchBooks()
        .then(response => response.data)
        .then(result => this.setState({books : result}))
      
    }
*/
    render(){

        const books = this.props.books;

        return(
        
            <div className= "table-div">
            <table className="tableAnimals">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Author</th>
              <th>Available Copies</th>
            </tr>
            
            {books.map(book => <tr>
                <td>{book.name}</td>
                <td>{book.category}</td>
                <td>{book.author.name}</td>
                <td>{book.availableCopies}</td>
                <td>
                    <Link to="/books/${props.book.id}">Edit Book</Link>
                </td>
            </tr>)}

            <Link to="/books/add">Add Book</Link>

            
              
        
            
          </table>
          
          </div>
        

        )
    }

}
export default Books;