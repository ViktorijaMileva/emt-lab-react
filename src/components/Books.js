import '../style/Books.css';
import BookService from '../repository/BookRepository.js';
import React from 'react';
import {Link} from 'react-router-dom';

class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount(){
        BookService.fetchBooks()
        .then(response => response.data)
        .then(result => this.setState({books : result}))
      /*  .then(response => response.json())
        .then(result => {
            this.setState({books: result})
        })
        .catch(e => {
            console.log(e);
            this.setState({...this.state});
        });*/
    }

    render(){

        const books = this.state.books;

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
            </tr>)}
            
              
        
            
          </table>
          
          </div>
        

        )
    }

}
export default Books;