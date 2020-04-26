import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Breadcrumb, Navbar } from 'react-bootstrap';
import Header from './Header';

class StockHistory extends React.Component {
  render() {
    return (
      <Container fluid className="p-0">
        <Header />
        StockHistory
      </Container>
    );
  }
}

export default StockHistory;
