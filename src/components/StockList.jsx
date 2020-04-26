import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import StockListForm from './StockListForm';
import BreadCrumb from './BreadCrumb';

class StockList extends React.Component {
  render() {
    return (
      <Container fluid className="p-0">
        <BreadCrumb/>
        <StockListForm/>
      </Container>
    );
  }
}

export default StockList;
