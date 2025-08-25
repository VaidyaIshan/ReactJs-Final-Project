import { useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, ListGroup, Row, Col, Image, Button } from "react-bootstrap";
import { addToCart } from "../slices/cartSlice";

function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const incrementQty = (item) => {
    dispatch(addToCart(item));
  };
  const decrementQty = () => {};
  return (
    <Container>
      <h2>Shopping Cart</h2>
      <ListGroup variant="flush">
        {cartItems.map((item) => (
          <ListGroup.Item>
            <Row>
              <Col md={1}>
                <Image src={item.image} fluid />
              </Col>
              <Col md={3}>
                <Link to={`/product/${item.id}`}>
                  <strong>{item.name}</strong>
                </Link>
              </Col>
              <Col>
                <Button variant="light" size="sm" onClick={decrementQty}>
                  -
                </Button>
                <span className="mx-2">{item.qty}</span>
                <Button
                  variant="light"
                  size="sm"
                  onClick={() => {
                    dispatch(addToCart({ ...item, qty: item.qty + 1 }));
                  }}
                >
                  +
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default CartPage;
