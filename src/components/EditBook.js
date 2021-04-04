import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/EditBook.css';

const EditBook = (props) => {
    const history = useHistory();
    let initialState = {
        name: "",
        category: "",
        authorId: 0,
        availableCopies: 0
    }
    const [formData, updateFormData] = React.useState(initialState)

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
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const category = formData.category !== "" ? formData.category : props.book.category;
        const authorId = formData.authorId !== 0 ? formData.authorId : props.book.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;

        console.log(name, category, authorId, availableCopies);
        props.onEditBook(props.book.id, name, category, authorId, availableCopies);
        history.push("/books");
    }
    

    return(
        <form className="editForm" onSubmit={onFormSubmit}>
                <label for="name">Book Name</label>
                <input id="name" 
                name="name" 
                placeholder={props.book.name} 
                onChange={handleChange}/>

                <label for="category">Book Category</label>
                <select name="category" id="category" onChange={handleChange}>
                    <option value={props.book.category} disabled selected>{props.book.category}</option>
                    {
                        Object.keys(Categories).map((key) => {
                            return <option value={key}>{key}</option>
                        })
                    }
                </select>

                <label for="authorId">Book Author</label>
                <select name="authorId" id="authorId" onChange={handleChange}>
                    {
                        props.authors.map((author) => {
                            return <option value={author.id}>{author.name}</option>
                        })
                    }
                </select>

                <label for="availableCopies">Book Available Copies</label>
                <input id="availableCopies" 
                name="availableCopies" 
                placeholder={props.book.availableCopies} 
                onChange={handleChange}/>

                <button id="submit" type="submit">Submit</button>

            </form>
    )
}
export default EditBook;