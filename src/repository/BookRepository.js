import axios from '../axios/custom-axios.js';

const BookService = {
    fetchBooks: () => {
        return axios.get("/books");
    }
}
export default BookService;