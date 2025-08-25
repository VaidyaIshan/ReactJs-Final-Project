import { Container, Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useEffect, useState } from "react";

function HomePage() {
  const [products, setProducts] = useState([]); // let products = []
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <Container>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.name} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      {/* <Product product={products[0]} />
      <Product product={products[1]} />
      <Product product={products[2]} /> */}
    </Container>
  );
}

export default HomePage;
