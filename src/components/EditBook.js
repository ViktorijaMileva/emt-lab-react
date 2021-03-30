import React from 'react';
import { useHistory } from 'react-router-dom';

const EditBook = (props) => {
    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "",
        authorId: "",
        availableCopies: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const category = formData.category !== "" ? formData.category : props.book.category;
        const authorId = formData.authorId !== 0 ? formData.authorId : props.book.authorId;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id, name, category, authorId, availableCopies);
        history.push("/books");
    }

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
export default EditBook;