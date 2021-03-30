import { Component } from "react";
import React from 'react';
import BookService from "../repository/BookRepository";
import {useHistory} from 'react-router-dom';


const AddBook = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "Book1",
        category: "DRAMA",
        authorId: "1",
        availableCopies: "3" 
    })

    const handleChange = (e) => {
        console.log(e.target.value);
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        console.log(formData);
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const authorId = formData.authorId;
        const availableCopies = formData.availableCopies;

        props.onAddBook(name, category, authorId, availableCopies);
        history.push("/books");
    }


    /*handleSubmit(){
        BookService.addBook();

    }*/

        return(
            <form onSubmit={onFormSubmit}>
                <label for="name">Book Name</label>
                <input type="text" id="name" name="name" onChange={handleChange}/>
                <label for="category">Book Category</label>
                <input type="text" id="category" name="category" onChange={handleChange}/>
                <label for="authorId">Book Author</label>
                <input type="text" id="authorId" name="authorId" onChange={handleChange}/>
                <label for="availableCopies">Book Available Copies</label>
                <input type="text" id="availableCopies" name="availableCopies" onChange={handleChange}/>

                <button type="submit">Submit</button>

            </form>
        )
}
export default AddBook;