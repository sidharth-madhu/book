import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions/bookActions';
import { Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookListPage = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h1>Book List</h1>
      <Link to="/add">
        <Button variant="success" className="mb-3">Add New Book</Button>
      </Link>
      <ListGroup>
        {books.map((book) => (
          <ListGroup.Item key={book.id} className="d-flex justify-content-between align-items-center">
            <div>
              {book.image && <img src={book.image} alt={book.title} style={{ width: '50px', marginRight: '10px' }} />}
              <strong>{book.title}</strong> by {book.author}
            </div>
            <div>
              <Link to={`/edit/${book.id}`}>
                <Button variant="warning" className="me-2">Edit</Button>
              </Link>
              <Button variant="danger" onClick={() => dispatch(deleteBook(book.id))}>Delete</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default BookListPage;
