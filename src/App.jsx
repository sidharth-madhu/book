import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import store from './redux/store';
import AddEditBook from './pages/AddEditBook';
import BookListPage from './pages/BookListPage';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'; // Import your Bootstrap theme

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg" style={{ width: '100%' }}> {/* Ensure full width */}
          <Container fluid>
            <Navbar.Brand as={Link} to="/">Book Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end"> {/* Align items to the right */}
              <Navbar.Text>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container 
          className="d-flex justify-content-center align-items-center" 
          style={{ minHeight: '100vh', width: '100vw' }} 
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <Routes>
              <Route path="/" element={<BookListPage />} />
              <Route path="/add" element={<AddEditBook />} />
              <Route path="/edit/:id" element={<AddEditBook />} />
            </Routes>
          </div>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
