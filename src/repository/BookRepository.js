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
        return axios.put(`/books/edit/${id}` ,{
        "name" : name,
        "category" : category,
        "author" : authorId,
        "availableCopies" : availableCopies
        });
    },

    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },

    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`)
    }
}
export default BookService;