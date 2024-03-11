// AddBook.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    summary: '',
    publicationYear: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);

        const response = await axios.post('http://localhost:8082/v1/book', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 201) {
          console.log('Book added successfully:', response.data);
          // Redirect to the books page or any other page after successful submission
          navigate('/');
        } else {
          console.error('Failed to add book:', response.data);
        }
      } catch (error) {
        console.error('Error adding book:', error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.title.trim()) {
      errors.title = 'Title is required';
    }
    if (!data.author.trim()) {
      errors.author = 'Author is required';
    }
    if (!data.summary.trim()) {
      errors.summary = 'Summary is required';
    }
    if (!data.publicationYear.trim()) {
      errors.publicationYear = 'Publication Year is required';
    }
    return errors;
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            isInvalid={!!errors.author}
          />
          <Form.Control.Feedback type="invalid">{errors.author}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formSummary">
          <Form.Label>Summary</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            isInvalid={!!errors.summary}
          />
          <Form.Control.Feedback type="invalid">{errors.summary}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPublicationYear">
          <Form.Label>Publication Year</Form.Label>
          <Form.Control
            type="text"
            name="publicationYear"
            value={formData.publicationYear}
            onChange={handleChange}
            isInvalid={!!errors.publicationYear}
          />
          <Form.Control.Feedback type="invalid">{errors.publicationYear}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Adding Book...' : 'Add Book'}
        </Button>
      </Form>
    </div>
  );
};

export default AddBook;