import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, editBook } from '../redux/actions/bookActions';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const AddEditBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  
  const books = useSelector((state) => state.books.books);
  const existingBook = id ? books.find((book) => book.id === parseInt(id)) : null;

  const [title, setTitle] = useState(existingBook ? existingBook.title : '');
  const [author, setAuthor] = useState(existingBook ? existingBook.author : '');
  const [image, setImage] = useState(existingBook ? existingBook.image : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = { id: existingBook ? existingBook.id : Date.now(), title, author, image };
    
    if (id) {
      dispatch(editBook(bookData));
    } else {
      dispatch(addBook(bookData));
    }

    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Book Title</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter book title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </Form.Group>

      <Form.Group controlId="formBasicAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter author name" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          required 
        />
      </Form.Group>

      <Form.Group controlId="formBasicImage">
        <Form.Label>Book Image</Form.Label>
        <Form.Control 
          type="file" 
          accept="image/*" 
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setImage(reader.result); // Save base64 string of the image
              };
              reader.readAsDataURL(file); // Convert file to base64
            }
          }} 
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {id ? 'Edit Book' : 'Add Book'}
      </Button>
    </Form>
  );
};

export default AddEditBook;
