import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const submitData = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/products", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({
        name,
        description,
        price,
        category,
        brand,
        image,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={submitData}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setBrand(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Button className="my-3" type="submit">
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddProduct;
