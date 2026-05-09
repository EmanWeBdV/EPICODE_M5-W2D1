import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import fantasyBooks from "../books/fantasy.json";

import SingleBook from "./SingleBook";

function AllTheBooks() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Container className="my-4">
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Cerca un libro..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Form>

      <Row>
        {fantasyBooks
          .filter((book) =>
            book.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((book) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;