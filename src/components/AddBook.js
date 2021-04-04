import { Component } from "react";
import React from 'react';
import BookService from "../repository/BookRepository";
import '../style/AddBook.css'
import {useHistory} from 'react-router-dom';


const AddBook = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "Book1",
        category: "DRAMA",
        authorId: "1",
        availableCopies: "3" 
    })

    const Categories = {
        THRILLER: "THRILLER",
        DRAMA: "DRAMA",
        NOVEL: "NOVEL", 
        HISTORY: "HISTORY", 
        FANTASY: "FANTASY", 
        BIOGRAPHY: "BIOGRAPHY", 
        CLASSICS: "CLASSICS"
    }

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

        return(
            <form className="addForm" onSubmit={onFormSubmit}>
                <label for="name">Book Name</label>
                <input type="text" id="name" name="name" onChange={handleChange}/>
                <label for="category1">Book Category</label>
                <select name="category" id="category1" onChange={handleChange}>
                    {
                        Object.keys(Categories).map((key) => {
                            return <option value={key}>{key}</option>
                        })
                    }
                </select>

                <label for="authorId">Book Author</label>
                <select name="author" id="authorId" onChange={handleChange}>
                    {
                        props.authors.map((author) => {
                            return <option value={author.id}>{author.name}</option>
                        })
                    }
                </select>

                <label for="availableCopies">Book Available Copies</label>
                <input type="text" id="availableCopies" name="availableCopies" onChange={handleChange}/>

                <button type="submit">Submit</button>

            </form>
        )
}
export default AddBook;