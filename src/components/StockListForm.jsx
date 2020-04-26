import React from 'react';
import './../App.css';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';

class StockListForm extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Form>
            <Form.Row>
              <Col md="auto" className="mx-2">
                <Form.Group as={Row} controlId="exampleForm.SelectCustom" className="m-0 p-0">
                  <Form.Label className="align-self-center">Select Stock *</Form.Label>
                  <Col md="auto">
                    <Form.Control as="select" custom>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Col>
              <Col md="auto" className="mx-2">
                <Form.Group as={Row} controlId="exampleForm.SelectCustom" className="m-0 p-0">
                  <Form.Label className="align-self-center">Select Industry</Form.Label>
                  <Col md="auto">
                    <Form.Control as="select" custom>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Col>
              <Col md="auto" className="mr-2">
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>

        </Card.Body>
      </Card>
    );
  }
}

export default StockListForm;
