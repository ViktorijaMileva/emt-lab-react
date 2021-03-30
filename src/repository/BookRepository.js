import axios from '../axios/custom-axios.js';

const BookService = {
    fetchBooks: () => {
        return axios.get("/books");
    },

    addBook: (name, category, authorId, availableCopies) => {
        return axios.post("/books/add", {
            "name" : name,
            "category" : category,
            "author" : authorId,
            "availableCopies" : availableCopies

        });
    },

    editBook: (id, name, category, authorId, availableCopies) => {
        return axios.put(`/books/${id}`,{
        "name" : name,
        "category" : category,
        "author" : authorId,
        "availableCopies" : availableCopies
        });
    }
}
export default BookService;