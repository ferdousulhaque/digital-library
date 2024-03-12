// EditBook.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const EditBook = () => {
  const { bookId } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    summary: "",
    publicationYear: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch book details using the bookId from the URL params
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/v1/book/${bookId}`
        );
        const bookDetails = response.data;

        // Set the form data with the fetched book details
        setFormData({
          title: bookDetails.title,
          author: bookDetails.author,
          summary: bookDetails.summary,
          publicationYear: bookDetails.publicationYear,
        });
      } catch (error) {
        console.error("Error fetching book details:", error.message);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    const onBack = async () => {
      navigate('/');
    };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);

        // Update book details using the bookId from the URL params
        await axios.put(`http://localhost:8082/v1/book/${bookId}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Book details updated successfully");
        navigate(`/`); // Redirect to the book details page after update
      } catch (error) {
        console.error("Error updating book details:", error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    // Implement validation logic if needed
    return errors;
  };

  return (
    <div>
      <h2>Edit Book</h2>
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
          <Form.Control.Feedback type="invalid">
            {errors.title}
          </Form.Control.Feedback>
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
          <Form.Control.Feedback type="invalid">
            {errors.author}
          </Form.Control.Feedback>
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
          <Form.Control.Feedback type="invalid">
            {errors.summary}
          </Form.Control.Feedback>
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
          <Form.Control.Feedback type="invalid">
            {errors.publicationYear}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Updating Book..." : "Update Book"}
        </Button>
        <Button variant="warning" onClick={() => onBack()}>
          Back
        </Button>
      </Form>
    </div>
  );
};

export default EditBook;
