import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';

class BreadCrumb extends React.Component {
  render() {
    return (
      <Breadcrumb className="m-0">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/stocks">Stocks</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default BreadCrumb;
